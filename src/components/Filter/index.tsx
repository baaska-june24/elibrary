import * as React from "react";
import { Divider, Radio, Rate, Alert, Icon, Button, Drawer } from "antd";
import { useQuery } from "@apollo/react-hooks";
import { GET_LIST_TAG_OPTIONS } from "~/queries/tags.graphql";
import { useRouter } from "next/router";
import {
  Get_List_Tag_OptionsQuery,
  Get_List_Tag_OptionsQueryVariables
} from "~/generated/graphql";
import "./style.less";
import FilterOrganization from "./filter_organizations";
import useMedia from "use-media";
import { useState, useEffect } from "react";

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px",
  padding: "5px"
};

const DataFilter = () => {
  const router = useRouter();
  const { asPath, pathname, query } = router;
  const [hasMore, setHasMore] = useState(false);

  const pathName =
    pathname.indexOf("[id]") > -1
      ? pathname.replace("[id]", query.id as string)
      : pathname;
  const searchParams = new URLSearchParams(asPath.replace(pathName, ""));
  const path = pathName.split("/");

  const limit = 5;
  const { data, error, fetchMore } = useQuery<
    Get_List_Tag_OptionsQuery,
    Get_List_Tag_OptionsQueryVariables
  >(GET_LIST_TAG_OPTIONS, {
    variables: {
      limit,
      where: {
        parent_id: {
          _is_null: true
        },
        type_id: {
          _eq: 1
        }
      }
    }
  });

  const length = data && data.options && data.options.length;
  useEffect(() => {
    if (length > 0) {
      setHasMore(true);
    }
  }, [length]);

  if (error) {
    return <Alert type="error" message={error.message} />;
  }

  const handleFetchMore = () => {
    fetchMore({
      updateQuery: (prev: Get_List_Tag_OptionsQuery, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        setHasMore((fetchMoreResult.options || []).length === limit);
        return {
          ...prev,
          options: [...prev.options, ...fetchMoreResult.options]
        };
      },
      variables: {
        offset: data.options.length
      }
    });
  };

  return (
    <>
      <div className="filter-header">
        <h3>Шүүлтүүр</h3>
        <a
          onClick={() => {
            searchParams.delete("average_rate");
            searchParams.delete("category_id");
            searchParams.delete("published_at");
            searchParams.delete("query");
            searchParams.delete("type");
            searchParams.delete("organization_id");
            searchParams.delete("payment_type");
            router.push(`${pathName}${searchParams.toString()}`);
          }}
        >
          Цэвэрлэх
        </a>
      </div>
      <Divider />
      <ul className="filter-list">
        <h3>Ангилал</h3>
        <li>
          <ul>
            {data &&
              data.options &&
              data.options.map(({ title, key }: any) => {
                return (
                  <li key={key}>
                    <a
                      style={
                        searchParams.get("category_id") == key
                          ? {
                              fontWeight: "bolder",
                              color: "#f28a0b"
                            }
                          : {}
                      }
                      onClick={() => {
                        searchParams.set("category_id", key);
                        router.push(`${pathName}?${searchParams.toString()}`);
                      }}
                    >
                      {title}
                      <strong>
                        <Icon
                          type="caret-left"
                          style={{
                            color: "#CCC"
                          }}
                        />
                      </strong>
                    </a>
                  </li>
                );
              })}
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
                Цааш үзэх ...
              </Button>
            )}
          </ul>
        </li>
        <Divider />
        {path[1] !== "organizations" && (
          <>
            <h3>Байгууллага</h3>
            <li>
              <FilterOrganization />
            </li>
            <Divider />
          </>
        )}
      </ul>

      <h3>Номын үнэлгээ</h3>
      <div className="checkbox-style">
        <Radio.Group
          defaultValue={20}
          onChange={value => {
            if (value.target.value === 20) {
              searchParams.delete("average_rate");
            } else {
              searchParams.set("average_rate", value.target.value);
            }
            router.push(`${pathName}?${searchParams.toString()}`);
          }}
        >
          <Radio style={radioStyle} value={20}>
            Бүгд
          </Radio>
          <Radio style={radioStyle} value={4}>
            <Rate value={4} disabled />
          </Radio>
          <Radio style={radioStyle} value={3}>
            <Rate value={3} disabled />
          </Radio>
          <Radio style={radioStyle} value={2}>
            <Rate value={2} disabled />
          </Radio>
          <Radio style={radioStyle} value={1}>
            <Rate value={1} disabled />
          </Radio>
        </Radio.Group>
      </div>
      <Divider />
      <h3>Бүтээлийн хугацаа</h3>
      <div className="checkbox-style">
        <Radio.Group
          defaultValue={20}
          onChange={value => {
            if (value.target.value === 20) {
              searchParams.delete("published_at");
            } else {
              searchParams.set("published_at", value.target.value);
            }
            router.push(`${pathName}?${searchParams.toString()}`);
          }}
        >
          <Radio style={radioStyle} value={20}>
            Бүгд
          </Radio>
          <Radio style={radioStyle} value={1}>
            1 - 3 жил
          </Radio>
          <Radio style={radioStyle} value={3}>
            3 - 5 жил
          </Radio>
          <Radio style={radioStyle} value={5}>
            5 - 8
          </Radio>
          <Radio style={radioStyle} value={10}>
            10 жилээс өмнөх
          </Radio>
        </Radio.Group>
      </div>
      <Divider />
      <h3>Төлбөрийн нөхцөл</h3>
      <div className="checkbox-style">
        <Radio.Group
          defaultValue={20}
          onChange={value => {
            if (value.target.value === 20) {
              searchParams.delete("payment_type");
            } else {
              searchParams.set("payment_type", value.target.value);
            }
            router.push(`${pathName}?${searchParams.toString()}`);
          }}
        >
          <Radio style={radioStyle} value={20}>
            Бүгд
          </Radio>
          <Radio style={radioStyle} value="free">
            Үнэгүй
          </Radio>
          <Radio style={radioStyle} value="cash">
            Үнэтэй
          </Radio>
          <Radio style={radioStyle} value="membership">
            Гишүүнчлэлийн
          </Radio>
          <Radio style={radioStyle} value="sales">
            Хямдралтай
          </Radio>
        </Radio.Group>
      </div>
    </>
  );
};

const WrappedDataFilter = () => {
  const isMobileScreen = useMedia({ maxWidth: 767 });
  const [isShow, setIsShow] = React.useState(false);

  if (isMobileScreen) {
    return (
      <>
        <Button onClick={() => setIsShow(true)} type="link">
          Шүүлтүүр <Icon type="bars" />
        </Button>
        <Drawer
          title="Хайх"
          placement="left"
          width="70%"
          closable
          visible={isShow}
          onClose={() => setIsShow(false)}
        >
          <DataFilter />
        </Drawer>
      </>
    );
  }

  return <DataFilter />;
};

export default WrappedDataFilter;
