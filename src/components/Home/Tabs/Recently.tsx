import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Link from "next/link";
import ContentList from "~/components/Content/List";
import { Spin } from "antd";

const HomeRecentlyTab = () => {
  const { data, loading } = useQuery(gql`
    query {
      contents: vw_contents(
        order_by: { created_at: desc_nulls_last }
        limit: 16
      ) {
        id
        name
        cover: key
        bucket
        average_rate
        price
        payment_type
      }
    }
  `);

  return (
    <Spin spinning={loading}>
      {data && data.contents && (
        <>
          <div style={{ padding: "1rem 0" }}>
            <ContentList contents={data.contents} />
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/contents/?sort=newFirst" passHref>
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

export default HomeRecentlyTab;
