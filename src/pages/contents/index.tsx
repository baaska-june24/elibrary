import * as React from "react";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Row, Col, Divider, Icon, Spin } from "antd";
import useMedia from "use-media";
import { isTablet, isIOS } from "react-device-detect";
import { useQuery } from "@apollo/react-hooks";
// Components
import withLayout from "~/components/Layout";
import Container from "~/components/Container";
import DataFilter from "~/components/Filter";
import ContentList from "~/components/Content/List";
import { CONTENT_SEARCH } from "~/queries/search.graphql";
import {
  Content_SearchQuery,
  Content_SearchQueryVariables,
  OrderDirection
} from "~/generated/graphql";
import Button from "~/components/Button";
import Sort from "~/components/Sort";

interface StringDict {
  [k: string]: string
};

const type_names: StringDict = {
  "diploma": "Дипломын ажил",
  "research": "Судалгаа, статистик",
  "dissertation": "Эрдмийн ажил",
  "newspaper": "Сонин",
  "magazine": "Сэтгүүл",
  "book": "Ном"
};

const Filter = () => {
  const router = useRouter();
  const searchParams = new URLSearchParams(
    router.asPath.replace(router.pathname, "")
  );
  const [hasMore, setHasMore] = React.useState(false);
  const isMobileScreen = useMedia({ maxWidth: 767 });
  const isIPad =
    isTablet &&
    isIOS &&
    useMedia({
      maxDeviceWidth: 1024,
      minDeviceWidth: 768,
      orientation: "portrait"
    });
  const isIPadPro =
    isTablet &&
    isIOS &&
    useMedia({
      maxDeviceWidth: 1366,
      minDeviceWidth: 1024,
      orientation: "portrait"
    });
  const limit = isMobileScreen || (isIPad && !isIPadPro) ? 16 : 18;
  const initialVariables: Content_SearchQueryVariables = {
    limit,
    where: {}
  };

  searchParams.forEach((value: string, key: string) => {
    if (key === "average_rate" || key === "published_at") {
      initialVariables.where[key] = parseInt(value, 10);
    }
    if (key === "sort") {
      let orderBy;
      switch (value) {
        case "newFirst":
          orderBy = { created_at: OrderDirection.Desc };
          break;
        case "oldFirst":
          orderBy = { created_at: OrderDirection.Asc };
          break;
        case "highRate":
          orderBy = { average_rate: OrderDirection.Desc };
          break;
        case "lowerPrice":
          orderBy = { price: OrderDirection.Asc };
          break;
        case "newItemFirst":
          orderBy = { published_at: OrderDirection.Desc };
          break;
        default:
          break;
      }

      initialVariables.order_by = [orderBy];
    } else if (
      [
        "query",
        "type",
        "category_id",
        "organization_id",
        "payment_type"
      ].indexOf(key) > -1
    ) {
      (initialVariables.where as any)[key] = value;
    }
  });

  const { data, loading, refetch, fetchMore } = useQuery<
    Content_SearchQuery,
    Content_SearchQueryVariables
  >(CONTENT_SEARCH, { variables: initialVariables });

  const length = data && data.search && data.search.length;
  useEffect(() => {
    refetch(initialVariables);
  }, [router.asPath]);

  useEffect(() => {
    if (length > 0) {
      setHasMore(true);
    }
  }, [length]);

  const handleFetchMore = () => {
    fetchMore({
      updateQuery: (prev: Content_SearchQuery, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        setHasMore((fetchMoreResult.search || []).length === limit);

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
  const handleSelectChange = (key: any) => {
    searchParams.set("sort", key);

    router.push(`/contents?${searchParams.toString()}`);
  };

  let page_title = 'Esan';

  if (router.query.type !== undefined){
    // @ts-ignore
    page_title = type_names[router.query.type];
  }

  if (router.query.query !== undefined) {
    page_title = 'Хайлт: ' + router.query.query;
  }


  return (
    <Container>
        <Head>
          <title>{page_title}</title>
        </Head>
      <Spin spinning={loading}>
        <Row type="flex" gutter={32} key={1} className="mainbody">
          <Col md={6}>{isMobileScreen ? null : <DataFilter />}</Col>
          <Col xs={24} sm={24} md={18} key={2}>
            <Sort handleSelectChange={handleSelectChange} />
            <Divider />
            {length > 0 ? (
              <ContentList
                contents={data && data.search}
                cols={isMobileScreen || (isIPad && !isIPadPro) ? 4 : 6}
              />
            ) : (
              <div
                style={{
                  color: "#EEEEEE",
                  textAlign: "center"
                }}
              >
                <Icon type="file-search" style={{ fontSize: 100 }} />
                <h2
                  style={{
                    color: "#EEEEEE"
                  }}
                >
                  Хайсан контент олдсонгүй
                </h2>
              </div>
            )}
            {length > (isMobileScreen ? 15 : 17) && hasMore && (
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

export default withLayout({ ssr: false })(Filter);
