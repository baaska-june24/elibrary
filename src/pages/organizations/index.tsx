import * as React from "react";
import Head from "next/head";
import { Row, Col } from "antd";
import { useQuery } from "@apollo/react-hooks";
import Link from "next/link";
import Alphabets from "~/components/Alphabets";
import { useRouter } from "next/router";
import OrganizationCard from "~/components/OrgCard";
import Button from "~/components/Button";
import Container from "~/components/Container";
import withLayout from "~/components/Layout";
import Section from "~/components/Section";
import {
  GET_VW_ORGANIZATION,
  GET_ORGANIZATIONS_AGGREGATE
} from "~/queries/organizations.graphql";
import {
  Get_Vw_OrganizationQuery,
  Get_Vw_OrganizationQueryVariables,
  Get_Organizations_AggregateQuery,
  Get_Organizations_AggregateQueryVariables,
  Order_By
} from "~/generated/graphql";
import "./style.less";


const OrgList = () => {
  const router = useRouter();
  const searchParams = new URLSearchParams(
    router.asPath.replace(router.pathname, "")
  );
  const searchChar = searchParams.get("query");

  const aggr = useQuery<
    Get_Organizations_AggregateQuery,
    Get_Organizations_AggregateQueryVariables
  >(GET_ORGANIZATIONS_AGGREGATE);

  const total =
    (aggr.data &&
      aggr.data.organizations_aggregate &&
      aggr.data.organizations_aggregate.aggregate &&
      aggr.data.organizations_aggregate.aggregate.count) ||
    0;

  const { data, loading, fetchMore } = useQuery<
    Get_Vw_OrganizationQuery,
    Get_Vw_OrganizationQueryVariables
  >(GET_VW_ORGANIZATION, {
    variables: {
      limit: 18,
      order_by: [
        {
          name: Order_By.Asc
        }
      ],
      where: searchChar
        ? {
            _or: ["name"].map(field => ({
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
      updateQuery: (prev: Get_Vw_OrganizationQuery, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        return {
          ...prev,
          organizations: [
            ...prev.organizations,
            ...fetchMoreResult.organizations
          ]
        };
      },
      variables: {
        offset: data.organizations.length
      }
    });
  };

  return (
    <>
      <Head>
        <title>Хамтрагч байгууллагууд</title>
      </Head>
      <Section title={`Бүх байгууллагууд (${total})`}>
        <Container>
          <Alphabets selected={router.query} jump_link='/organizations'/>
          {data && data.organizations && (
            <Row
              type="flex"
              gutter={10}
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
            >
              {data.organizations.map((organization: any) => (
                <Col xs={12} sm={12} md={6} lg={4} xl={4} key={organization.id}>
                  <OrganizationCard organization={organization} />
                </Col>
              ))}
            </Row>
          )}
          {data && data.organizations && data.organizations.length > 17 && (
            <div style={{ textAlign: "center" }}>
              <Button bordered loading={loading} onClick={handleFetchMore}>
                Илүү
              </Button>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
};

export default withLayout({ ssr: false })(OrgList);
