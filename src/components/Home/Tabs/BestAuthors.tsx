import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Link from "next/link";
import { Row, Col, Spin } from "antd";
import AuthorCard from "~/components/AuthorCard";

const HomeBestAuthorsTab = () => {
  const { data, loading } = useQuery<any, any>(gql`
    query {
      authors: vw_best_authors {
        id
        displayname
        avatar
        averagerate
        contentcount
        firstname
        lastname
      }
    }
  `);

  return (
    <Spin spinning={loading}>
      {data && data.authors && (
        <>
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

          <div style={{ textAlign: "center" }}>
            <Link href="/authors" passHref>
              <a className="ant-btn ant-btn-bordered ant-btn-round">
                Бүгдийг үзэх
              </a>
            </Link>
          </div>
        </>
      )}
    </Spin>
  );
};

export default HomeBestAuthorsTab;
