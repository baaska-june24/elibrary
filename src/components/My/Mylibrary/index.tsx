import * as React from "react";
import { Spin, Icon } from "antd";

import { useQuery } from "@apollo/react-hooks";
import Container from "~/components/Container";
import ContentList from "~/components/Content/List";
import { GET_PAID_CONTENT_LIST } from "~/queries/library.graphql";
import {
  Get_Paid_Content_ListQuery,
  Get_Paid_Content_ListQueryVariables
} from "~/generated/graphql";
import UserContext from "~/context";

import "./style.less";

const Mylibrary = () => {
  const [user]= React.useContext(UserContext);

  const { data, loading } = useQuery<
    Get_Paid_Content_ListQuery,
    Get_Paid_Content_ListQueryVariables
  >(GET_PAID_CONTENT_LIST, {
    variables: {
      where: {
        header: { details: { content_id: { _is_null: false } } },
        status: {
          _eq: "success"
        },
        user_id: {
          _eq: user && user.id
        }
      }
    }
  });

  const contentList: any[] = [];

  if (data && data.transactions) {
    data.transactions.forEach(transaction => {
      transaction.header.details.forEach(({ content }) => {
        contentList.push(content);
      });
    });
  }

  const length = contentList.length;

  return (
    <Spin spinning={loading}>
      <Container>
        <div style={{ padding: "3rem 0" }}>
          {length > 0 ? (
            <ContentList contents={contentList} />
          ) : (
            <div style={{ textAlign: "center", color: "#EEEEEE" }}>
              <Icon type="inbox" style={{ fontSize: 100 }} />
              <h2 style={{ color: "#EEEEEE" }}>Таны сан хоосон байна</h2>
            </div>
          )}
        </div>
      </Container>
    </Spin>
  );
};

export default Mylibrary;
