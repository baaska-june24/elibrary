import * as React from "react";
import { Row, Col, Spin, Icon } from "antd";
import { useSubscription } from "@apollo/react-hooks";
import Container from "~/components/Container";
import ContentCard from "~/components/Content/Card";
import { GET_BOOKMARKED_CONTENTS } from "./queries.graphql";
import "./style.less";
import {
  Get_Bookmarked_ContentsSubscription,
  Get_Bookmarked_ContentsSubscriptionVariables
} from "~/generated/graphql";

const BookmarkContents = () => {
  const { data, loading } = useSubscription<
    Get_Bookmarked_ContentsSubscription,
    Get_Bookmarked_ContentsSubscriptionVariables
  >(GET_BOOKMARKED_CONTENTS);

  const length = (data && data.bookmarks && data.bookmarks.length) || 0;

  return (
    <Container>
      <Spin spinning={loading}>
        <Row gutter={10}>
          <div style={{ padding: "3rem 0" }}>
            {length > 0 ? (
              data &&
              data.bookmarks &&
              data.bookmarks.map(({ content }) => (
                <Col xs={8} sm={8} md={6} lg={4} xl={3} key={content.id}>
                  <ContentCard content={content} />
                </Col>
              ))
            ) : (
              <div style={{ textAlign: "center", color: "#EEEEEE" }}>
                <Icon type="star" style={{ fontSize: 100 }} />
                <h2 style={{ color: "#EEEEEE" }}>
                  Танд одоогоор хадгалсан контент байхгүй байна
                </h2>
              </div>
            )}
          </div>
        </Row>
      </Spin>
    </Container>
  );
};

export default BookmarkContents;
