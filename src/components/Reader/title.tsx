import * as React from "react";
import Head from "next/head";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const CONTENT_NAME = gql`
  query CONTENT_NAME($id: bigint!) {
    contents(where: { id: { _eq: $id } }) {
      name
    }
  }
`;

const TitleComponent = ({ content_id }: any) => {
  console.log("content id", content_id);

  const { data, loading, error } = useQuery(CONTENT_NAME, {
    variables: { id: content_id }
  });

  let title = "Esan - цахим номын сан";

  if (loading) title = "loading ...";

  if (data && data.contents) title = data.contents[0].name;

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default TitleComponent;
