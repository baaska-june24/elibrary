import * as React from "react";
import { NextPageContext } from "next";
import Head from "next/head";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { getMainDefinition } from "apollo-utilities";
import { setContext } from "apollo-link-context";
import { split } from "apollo-link";
import ws from "ws";
import Auth from "@aws-amplify/auth";
import fetch from "isomorphic-unfetch";

import awsConfig from "~/aws-config";

let apolloClient: any = null;

const wsForNode = typeof window === "undefined" ? ws : null;

const config: any = {
  ...awsConfig
};

if (process.env.NODE_ENV === "production" && process.env.ROOT_DOMAIN) {
  config.cookieStorage = {
    domain: process.env.ROOT_DOMAIN || ".esan.mn",
    secure: false
  };
}

Auth.configure(config);

/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */
export function withApollo(PageComponent: any, { ssr = true } = {}) {
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }: any) => {
    const client = apolloClient || initApolloClient(apolloState);
    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== "production") {
    const displayName =
      PageComponent.displayName || PageComponent.name || "Component";

    if (displayName === "App") {
      console.warn("This withApollo HOC only works with PageComponents.");
    }

    WithApollo.displayName = `withApollo(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async (
      ctx: NextPageContext & { apolloClient: any }
    ) => {
      const { AppTree } = ctx;

      // Initialize ApolloClient, add it to the ctx object so
      // we can use it in `PageComponent.getInitialProp`.
      const apolloClient = (ctx.apolloClient = initApolloClient());

      // Run wrapped getInitialProps methods
      let pageProps = {};
      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      }

      // Only on the server:
      if (typeof window === "undefined") {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (ctx.res && ctx.res.finished) {
          return pageProps;
        }

        // Only if ssr is enabled
        if (ssr) {
          try {
            // Run all GraphQL queries
            const { getDataFromTree } = await import("@apollo/react-ssr");
            await getDataFromTree(
              <AppTree
                pageProps={{
                  ...pageProps,
                  apolloClient
                }}
              />
            );
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error("Error while running `getDataFromTree`", error);
          }

          // getDataFromTree does not call componentWillUnmount
          // head side effect therefore need to be cleared manually
          Head.rewind();
        }
      }

      // Extract query data from the Apollo store
      const apolloState = apolloClient.cache.extract();

      return {
        ...pageProps,
        apolloState
      };
    };
  }

  return WithApollo;
}

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {Object} initialState
 */
function initApolloClient(initialState?: any) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === "undefined") {
    return createApolloClient(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = createApolloClient(initialState);
  }

  return apolloClient;
}

const getHeaders = async (headers = {}) => {
  const currentSession = await Auth.currentSession().catch(() => {});
  const _headers: any = {
    ...headers
  };

  if (currentSession) {
    const idToken = currentSession.getIdToken();
    const { payload } = idToken;

    if (!_headers["X-Hasura-Role"]) {
      _headers["X-Hasura-Role"] = "user";
    }
    _headers["X-Hasura-User-Id"] = payload.sub;
    _headers.authorization = `Bearer ${idToken.getJwtToken()}`;
  } else {
    _headers["X-Hasura-Role"] = "anonymous";
  }

  return _headers;
};

/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 */
function createApolloClient(initialState = {}) {
  const cache = new InMemoryCache().restore(initialState);

  const GRAPHQL_ENDPOINT = process.env.BACKEND_ENDPOINT + "/v1/graphql";
  const SUBSCRIPTION_ENDPOINT = GRAPHQL_ENDPOINT.replace("http", "ws");

  const link = new HttpLink({
    uri: GRAPHQL_ENDPOINT,
    fetch
  });

  const authLink = setContext(async (_, { headers }) => {
    const _headers = await getHeaders(headers);

    return {
      headers: _headers
    };
  });

  const httpLink = authLink.concat(link);

  // Create a WebSocket link:
  const wsLink = new WebSocketLink(
    new SubscriptionClient(
      SUBSCRIPTION_ENDPOINT,
      {
        reconnect: true,
        timeout: 30000,
        connectionParams: async () => {
          return { headers: await getHeaders() };
        },
        connectionCallback: err => {
          if (err) {
            (wsLink as any).subscriptionClient.close(false, false);
          }
        }
      },
      wsForNode
    )
  );

  // chose the link to use based on operation
  const splitLink = split(
    // split based on operation type
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    httpLink
  );

  const client = new ApolloClient({
    cache,
    link: splitLink,
    connectToDevTools:
      process.env.NODE_ENV !== "production" && typeof window === "undefined",
    ssrMode: typeof window === "undefined"
  });

  return client;
}
