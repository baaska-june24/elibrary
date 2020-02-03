import * as React from "react";
import { Row, Col, Spin } from "antd";
import { useQuery } from "@apollo/react-hooks";
import AuthorCard from "~/components/AuthorCard";
import { RANDOM_AUTHORS } from "~/queries/authors.graphql";
import {
  Random_AuthorsQuery,
  Random_AuthorsQueryVariables
} from "~/generated/graphql";

const SuggestAuthors = () => {
  const { data, loading } = useQuery<
    Random_AuthorsQuery,
    Random_AuthorsQueryVariables
  >(RANDOM_AUTHORS);

  return (
    <Spin spinning={loading}>
      {data && data.authors && (
        <Row
          type="flex"
          gutter={10}
          style={{ marginBottom: "1rem", marginTop: "1rem" }}
        >
          {data.authors.map(author => (
            <Col xs={12} sm={8} md={6} lg={4} xl={4} key={author.id}>
              <AuthorCard author={author} />
            </Col>
          ))}
        </Row>
      )}
    </Spin>
  );
};

export default SuggestAuthors;
