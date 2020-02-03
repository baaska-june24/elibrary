import * as React from "react";
import { Row, Col, Icon, Spin } from "antd";
import { useQuery } from "@apollo/react-hooks";
import Container from "~/components/Container";
import ReadCard from "./ReadCard";

import {
  Get_Users_ContentsQuery,
  Get_Users_ContentsQueryVariables
} from "~/generated/graphql";
import { GET_USERS_CONTENTS } from "~/queries/contents.graphql";
import "./style.less";

const LastRead = () => {
  const { data, loading } = useQuery<
    Get_Users_ContentsQuery,
    Get_Users_ContentsQueryVariables
  >(GET_USERS_CONTENTS);

  const length =
    (data &&
      data.map_users_contents_status &&
      data.map_users_contents_status.length) ||
    0;

  return (
    <Spin spinning={loading}>
      <Container>
        <Row
          gutter={10}
          style={{
            marginBottom: "1rem",
            marginTop: "1rem",
            padding: "3rem 0"
          }}
        >
          {length > 0 ? (
            data &&
            data.map_users_contents_status &&
            data.map_users_contents_status.map(item => (
              <Col xs={12} sm={12} md={6} lg={4} xl={3}  key={item.content_id}>
                <ReadCard content={item.content} maxPage={item.max_page} />
              </Col>
            ))
          ) : (
            <div
              style={{
                color: "#EEEEEE",
                textAlign: "center"
              }}
            >
              <Icon type="read" style={{ fontSize: 100 }} />
              <h2
                style={{
                  color: "#EEEEEE"
                }}
              >
                Танд одоогоор уншсан контент байхгүй байна
              </h2>
            </div>
          )}
        </Row>
      </Container>
    </Spin>
  );
};

export default LastRead;
