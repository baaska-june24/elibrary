// tslint:disable import-name
import * as React from "react";
import App from "next/app";
import Head from "next/head";
import { initGA, initSentry, logPageView, EsanMetrics } from "~/utils/analytics";
import Router from "next/router";

class MyApp extends App {
  componentDidMount() {
    initGA();
    initSentry();
    logPageView();
    EsanMetrics.collect();
    Router.router.events.on("routeChangeComplete", () => {
      logPageView();
      EsanMetrics.collect();
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Esan – Үндэсний цахим сан</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
