import * as React from "react";
import { useEffect } from "react";
import useMedia from "use-media";
import { useRouter } from "next/router";
import { Row, Col, Divider, Spin, Icon } from "antd";
import { useQuery } from "@apollo/react-hooks";

import Button from "~/components/Button";
import Container from "~/components/Container";
import DataFilter from "~/components/Filter";
import Sort from "~/components/Sort";
import ContentList from "~/components/Content/List";
import {
  Content_SearchQuery,
  Content_SearchQueryVariables,
  OrderDirection
} from "~/generated/graphql";
import { CONTENT_SEARCH } from "~/queries/search.graphql";

import "./style.less";

interface IProps {}

const OrganizationContentList = (props: IProps) => {
  const router = useRouter();
  const organizationId = router.query.id;
  const searchParams = new URLSearchParams(
    router.asPath.replace(router.pathname, "")
  );
  const isMobileScreen = useMedia({ maxWidth: 767 });
  const initialVariables: Content_SearchQueryVariables = {
    limit: 18,
    where: {
      organization_id: `${organizationId}`
    }
  };
  searchParams.forEach((value: string, key: string) => {
    if (key === "average_rate" || key === "published_at") {
      initialVariables.where[key] = parseInt(value, 10);
    } else if (
      ["query", "type", "category_id", "payment_type"].indexOf(key) > -1
    ) {
      (initialVariables.where as any)[key] = value;
    }
  });

  const { data, loading, refetch, fetchMore } = useQuery<
    Content_SearchQuery,
    Content_SearchQueryVariables
  >(CONTENT_SEARCH, { variables: initialVariables });

  useEffect(() => {
    refetch(initialVariables);
  }, [router.asPath]);

  const length = data && data.search && data.search.length;

  const handleFetchMore = () => {
    fetchMore({
      updateQuery: (prev: Content_SearchQuery, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        return {
          ...prev,
          search: [...prev.search, ...fetchMoreResult.search]
        };
      },
      variables: {
        offset: data.search.length
      }
    });
  };
  const handleSelectChange = (value: any) => {
    let orderBy;
    if (value === "newFirst") {
      orderBy = { created_at: OrderDirection.Desc };
    } else if (value === "oldFirst") {
      orderBy = { created_at: OrderDirection.Asc };
    } else if (value === "highRate") {
      orderBy = { average_rate: OrderDirection.Desc };
    } else if (value === "lowerPrice") {
      orderBy = { price: OrderDirection.Asc };
    } else if (value === "newItemFirst") {
      orderBy = { published_at: OrderDirection.Desc };
    }

    const variables: Content_SearchQueryVariables = {
      ...initialVariables
    };

    if (orderBy) {
      variables.order_by = [orderBy];
    }

    refetch(variables);
  };

  return (
    <Container>
      <Spin spinning={loading}>
        <Row type="flex" gutter={32} className="mainbody">
          {!isMobileScreen && (
            <Col xs={24} sm={24} md={6}>
              <DataFilter />
            </Col>
          )}
          <Col xs={24} sm={24} md={18}>
            <Sort {...props} handleSelectChange={handleSelectChange} />
            <Divider />
            {length > 0 ? (
              <ContentList contents={data && data.search} cols={6} />
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
                  Одоогоор контент алга байна
                </h2>
              </div>
            )}
            {length > 17 && (
              <div style={{ textAlign: "center" }}>
                <Button bordered loading={loading} onClick={handleFetchMore}>
                  Илүү
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </Spin>
    </Container>
  );
};

export default OrganizationContentList;
