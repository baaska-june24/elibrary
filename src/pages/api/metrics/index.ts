import { NextApiRequest, NextApiResponse } from "next";
import { GraphQLClient } from "graphql-request";
const BACKEND_ENDPOINT = process.env.BACKEND_ENDPOINT;

const client = new GraphQLClient(BACKEND_ENDPOINT + "/v1/graphql");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("headers", req.headers);
  console.log("authorization", req.headers.authorization);
  if (req.headers.authorization) {
    client.setHeader("authorization", req.headers.authorization);
  }
  const { query } = req;

  let action = query.action || "pageview";
  const url = query.u as string;
  const pathname = query.pn as string;
  let searchParams = new URLSearchParams();
  const meta: any = {
    ...query
  };

  if (pathname === "/contents") {
    action = "search";
  } else if (!query.action && pathname.startsWith("/contents/")) {
    action = "content_view";
  } else if (pathname.startsWith("/read/")) {
    action = "read";
  } else if (pathname.startsWith("/organizations/")) {
    action = "organization_view";
  } else if (pathname.startsWith("/authors/")) {
    action = "authors_view";
  }

  if (url.indexOf("?") > -1) {
    searchParams = new URLSearchParams(url.split("?")[1]);
    const _params: any = {};
    searchParams.forEach((value, key) => {
      _params[key] = value;
    });
    meta.searchParams = _params;
  }
  console.log("URL:", url);
  console.log(meta, action);

  await client
    .request(
      `
    mutation CREATE_METRICS($objects: [marketing_users_history_insert_input!]!){
      insert_marketing_users_history(objects: $objects) {
        affected_rows
      }
    }
  `,
      {
        objects: [
          {
            url,
            meta,
            action,
            user_id: !req.headers.authorization && meta.un ? meta.un : null
          }
        ]
      }
    )
    .then(() => {
      // send 1x1px transparent png
      const data = Buffer.from(
        "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==",
        "base64"
      );
      res.setHeader("Content-Type", "image/png");
      res.setHeader("Content-Length", data.length);
      res.setHeader("cache-control", "no-cache, no-store, must-revalidate");
      res.setHeader("expires", new Date(1900, 1, 1).toString());
      res.send(data);
    })
    .catch(e => {
      console.log(e);
      res.send(e);
    });
};
