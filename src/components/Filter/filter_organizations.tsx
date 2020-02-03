import * as React from "react";
import { Alert, Icon, Button } from "antd";
import { useQuery } from "@apollo/react-hooks";
import { GET_VW_ORGANIZATIONS_COUNT } from "~/queries/organizations.graphql";
import {
  Get_Vw_Organizations_CountQueryVariables,
  Get_Vw_Organizations_CountQuery
} from "~/generated/graphql";
import { useRouter } from "next/router";

const FilterOrganization = () => {
  const router = useRouter();
  const [hasMore, setHasMore] = React.useState(false);

  const searchParams = new URLSearchParams(
    router.asPath.replace(router.pathname, "")
  );
  const pathName = router.pathname;
  const limit = 5;
  const { data, error, fetchMore } = useQuery<
    Get_Vw_Organizations_CountQuery,
    Get_Vw_Organizations_CountQueryVariables
  >(GET_VW_ORGANIZATIONS_COUNT, {
    variables: {
      limit
    }
  });

  const length =
    data &&
    data.organization_content_count &&
    data.organization_content_count.length;
  React.useEffect(() => {
    if (length > 0) {
      setHasMore(true);
    }
  }, [length]);

  if (error) {
    return <Alert type="error" message={error.message} />;
  }

  const handleFetchMore = () => {
    fetchMore({
      updateQuery: (
        prev: Get_Vw_Organizations_CountQuery,
        { fetchMoreResult }
      ) => {
        if (!fetchMoreResult) {
          return prev;
        }
        setHasMore(
          (fetchMoreResult.organization_content_count || []).length === limit
        );
        return {
          ...prev,
          organization_content_count: [
            ...prev.organization_content_count,
            ...fetchMoreResult.organization_content_count
          ]
        };
      },
      variables: {
        offset: data.organization_content_count.length
      }
    });
  };

  return (
    <div>
      <ul>
        {data &&
          data.organization_content_count &&
          data.organization_content_count.map(({ name, id }: any) => (
            <li key={id}>
              <a
                style={
                  searchParams.get("organization_id") == id
                    ? { fontWeight: "bold", color: "#f28a0b" }
                    : null
                }
                onClick={() => {
                  searchParams.set("organization_id", id);
                  router.push(`${pathName}?${searchParams.toString()}`);
                }}
              >
                {name}
                {/* <strong>{contentscount}</strong> */}
                <strong>
                  <Icon type="caret-left" style={{ color: "#CCC" }} />
                </strong>
              </a>
            </li>
          ))}
        {length > 4 && hasMore && (
          <Button
            type="link"
            onClick={handleFetchMore}
            style={{
              fontSize: "12px",
              color: "#707070",
              fontWeight: "bold"
            }}
          >
            Цааш үзэх...
          </Button>
        )}
      </ul>
    </div>
  );
};

export default FilterOrganization;
