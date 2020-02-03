import * as React from "react";
import Head from "next/head";
import { Row, Col } from "antd";
import { useQuery } from "@apollo/react-hooks";
import AuthorCard from "~/components/AuthorCard";
import Alphabets from "~/components/Alphabets";
import Button from "~/components/Button";
import Container from "~/components/Container";
import withLayout from "~/components/Layout";
import Section from "~/components/Section";
import {
  GET_LIST_VW_AUTHORS,
  GET_AUTHORS_AGGREGATE
} from "~/queries/authors.graphql";
import {
  Get_List_Vw_AuthorsQuery,
  Get_List_Vw_AuthorsQueryVariables,
  Get_Authors_AggregateQuery,
  Get_Authors_AggregateQueryVariables,
  Order_By
} from "~/generated/graphql";

import { useRouter } from "next/router";



const AuthorsList = () => {
  const router = useRouter();
  // const searchParams = new URLSearchParams(props.location.search);
  const { query: searchChar } = router.query;

  const aggr = useQuery<
    Get_Authors_AggregateQuery,
    Get_Authors_AggregateQueryVariables
  >(GET_AUTHORS_AGGREGATE);

  const { data, loading, fetchMore } = useQuery<
    Get_List_Vw_AuthorsQuery,
    Get_List_Vw_AuthorsQueryVariables
  >(GET_LIST_VW_AUTHORS, {
    variables: {
      limit: 18,
      orderBy: [
        {
          firstname: Order_By.Asc,
          lastname: Order_By.Asc
        }
      ],
      where: searchChar
        ? {
            _or: ["firstname"].map(field => ({
              [field]: {
                _ilike: `${searchChar}%`
              }
            }))
          }
        : null
    }
  });

  const handleFetchMore = () => {
    fetchMore({
      updateQuery: (prev: Get_List_Vw_AuthorsQuery, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        return {
          ...prev,
          authors: [...prev.authors, ...fetchMoreResult.authors]
        };
      },
      variables: {
        offset: data.authors.length
      }
    });
  };

  return (
    <>
      <Head>
        <title>Зохиолчид</title>
      </Head>
      <Section
        title={`Бүх зохиолчид (${(aggr.data &&
          aggr.data.authors_aggregate &&
          aggr.data.authors_aggregate.aggregate &&
          aggr.data.authors_aggregate.aggregate.count) ||
          0})`}
      >
        <Container>
          <Alphabets selected={router.query} jump_link='/authors'/>
          {data && data.authors && (
            <Row
              type="flex"
              gutter={10}
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
            >
              {data.authors.map((author: any) => (
                <Col xs={12} sm={12} md={6} lg={4} xl={4} key={author.id}>
                  <AuthorCard author={author} />
                </Col>
              ))}
            </Row>
          )}

          <div style={{ textAlign: "center" }}>
            <Button bordered loading={loading} onClick={handleFetchMore}>
              Илүү
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default withLayout({ ssr: false })(AuthorsList);
