import * as React from "react";
import { useState, useEffect, useContext } from "react";
import {
  Row,
  Col,
  Table,
  Icon,
  Input,
  Popconfirm,
  message,
  Alert,
  Tooltip
} from "antd";
import moment from "moment";
import numeral from "numeral";
import {
  GET_AGGREGATE_ORG_CONTENTS,
  UPDATE_CONTENTS
} from "~/queries/contents.graphql";

import { GET_ORGANIZATION_CONTENTS } from "~/queries/organizations.graphql";
import { PaginationConfig, SorterResult } from "antd/lib/table";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  Get_Organization_ContentsQuery,
  Get_Organization_ContentsQueryVariables,
  Vw_Organization_Contents,
  Order_By,
  Organizations,
  Update_ContentsMutation,
  Update_ContentsMutationVariables,
  Get_Aggregate_Org_ContentsQuery,
  Get_Aggregate_Org_ContentsQueryVariables,
  Vw_Organizations_Paid_Contents_Bool_Exp,
  Vw_Organizations_Paid_Contents_Order_By,
  Vw_Organizations_Paid_Contents
} from "~/generated/graphql";
import { setEmpty, compare } from "~/utils/helpers";

import "../style.less";
import Button from "~/components/Button";
import ButtonGroup from "antd/lib/button/button-group";
import UserContext from "~/context";
import { getImageUrl, canLoadWebp } from "~/utils/helpers";
import Link from "next/link";

interface IProps {
  organization?: { __typename?: "organizations" } & Pick<
    Organizations,
    "id" | "name"
  >;
  role?: any;
}

const ListTable = ({ role, organization }: IProps) => {
  const [query, setQuery] = useState("");
  const [pagination, setPagination] = useState<PaginationConfig>();
  const [filters, setFilters] = useState();
  const [sorter, setSorter] = useState<SorterResult<any>>();
  const initialVariables: Get_Organization_ContentsQueryVariables = {
    where: {
      deleted_at: {
        _is_null: true
      },
      organization_id: {
        _eq: organization.id
      }
    }
  };

  const aggregateResult = useQuery<
    Get_Aggregate_Org_ContentsQuery,
    Get_Aggregate_Org_ContentsQueryVariables
  >(GET_AGGREGATE_ORG_CONTENTS, {
    context: {
      headers: {
        "X-Hasura-Role": role
      }
    },
    variables: initialVariables
  });

  const contentsResult = useQuery<
    Get_Organization_ContentsQuery,
    Get_Organization_ContentsQueryVariables
  >(GET_ORGANIZATION_CONTENTS, {
    context: {
      headers: {
        "X-Hasura-Role": role
      }
    },
    variables: {
      limit: 10,
      where: initialVariables.where
    }
  });

  const [updateContentAction] = useMutation<
    Update_ContentsMutation,
    Update_ContentsMutationVariables
  >(UPDATE_CONTENTS, {
    context: {
      headers: {
        "X-Hasura-Role": role
      }
    }
  });

  useEffect(() => {
    let limit = 10;
    let offset = 0;
    let where: Vw_Organizations_Paid_Contents_Bool_Exp | null | undefined =
      initialVariables.where;
    let order_by:
      | Vw_Organizations_Paid_Contents_Order_By[]
      | null
      | undefined = null;
    if (query && query.length > 0) {
      where = {
        ...where,
        _or: ["name", "isbn"].map(field => ({
          [field]: {
            _ilike: `%${query}%`
          }
        }))
      };
    }

    if (pagination) {
      limit = pagination.pageSize || 10;
      offset = limit * ((pagination.current || 1) - 1 || 0);
    }

    if (sorter && sorter.columnKey) {
      const sortDir = sorter.order === "ascend" ? Order_By.Asc : Order_By.Desc;
      order_by = [
        {
          [sorter.columnKey]: sortDir
        }
      ];
    }

    contentsResult.refetch({
      limit,
      offset,
      order_by,
      where
    });

    aggregateResult.refetch({
      where
    });
  }, [query, pagination, filters, sorter]);

  useEffect(() => {
    if (
      aggregateResult &&
      aggregateResult.data &&
      aggregateResult.data.vw_organizations_paid_contents_aggregate &&
      aggregateResult.data.vw_organizations_paid_contents_aggregate.aggregate
    ) {
      setPagination({
        ...pagination,
        total:
          aggregateResult.data.vw_organizations_paid_contents_aggregate
            .aggregate.count || 0
      });
    }
  }, [contentsResult, aggregateResult]);

  const handleTableChange = (
    // tslint:disable-next-line: variable-name
    _pagination: PaginationConfig,
    // tslint:disable-next-line: variable-name
    _filters: Record<
      | "meta"
      | "id"
      | "name"
      | "type"
      | "isbn"
      | "is_published"
      | "created_at"
      | "prices"
      | "authors_connection"
      | "key"
      | "reviews_aggregate"
      | "tags_connection"
      | "files",
      string[]
    >,
    // tslint:disable-next-line: variable-name
    _sorter: SorterResult<any>
  ) => {
    setPagination(_pagination);
    setFilters(_filters);
    setSorter(_sorter);
  };

  const publish = async (content: any) => {
    try {
      await updateContentAction({
        variables: {
          set: {
            is_published: !content.is_published
          },
          where: {
            id: {
              _eq: content.id
            }
          }
        }
      });
      contentsResult.refetch();
      message.success("Амжилттай хадгаллаа!");
    } catch (error) {
      message.error(error.message);
    }
  };

  // tslint:disable-next-line: variable-name
  const _delete = async (content: Vw_Organizations_Paid_Contents) => {
    if (content.is_published) {
      message.error("Нийтлэгдсэн контент тул устгах боломжгүй !", 8);
    } else {
      try {
        await updateContentAction({
          variables: {
            set: {
              deleted_at: new Date()
            },
            where: {
              id: {
                _eq: content.id
              }
            }
          }
        });
        contentsResult.refetch();
        message.success("Амжилттай устгалаа!");
      } catch (error) {
        message.error(error.message);
      }
    }
  };

  const { data, error } = contentsResult;

  if (error) {
    return <Alert message={error.message} type="error" />;
  }

  const dataSource = (data && data.vw_organization_contents) || [];

  const columns = [
    {
      dataIndex: "name",
      render: (text: string, content: Vw_Organization_Contents) => {
        const coverFile: any = content.cover || null;
        let coverUrl = "";
        if (coverFile && data && data.vw_organization_contents) {
          const key = unescape(encodeURIComponent(coverFile));
          const imageRequest = JSON.stringify({
            bucket: data.vw_organization_contents[0].bucket,
            edits: {
              resize: {
                fit: "contain",
                width: 40
              },
              [canLoadWebp ? "webp" : "jpeg"]: {
                quality: 80
              }
            },
            key
          });
          coverUrl = getImageUrl(imageRequest);
        }
        return (
          <>
            <Link href={`/contents/${content.id}`} prefetch={false}>
              <a style={{ color: "#000000", fontSize: "12px" }} target="_blank">
                <img src={coverUrl} className="content-list-cover" />
                <span>{setEmpty(text)}</span>
              </a>
            </Link>
          </>
        );
      },
      sorter: (
        a: Vw_Organizations_Paid_Contents,
        b: Vw_Organizations_Paid_Contents
      ) => compare(a.name, b.name),
      title: "Нэр"
    },
    {
      dataIndex: "",
      render: (content: Vw_Organizations_Paid_Contents) =>
        numeral(content.views).format("0,0"),

      title: "Үзсэн"
    },
    {
      dataIndex: "",
      render: (content: Vw_Organizations_Paid_Contents) =>
        numeral(content.read).format("0,0"),

      title: "Уншсан"
    },
    {
      dataIndex: "",
      render: (content: Vw_Organizations_Paid_Contents) => {
        if (content) {
          if (content.payment_type === "cash") {
            return numeral(content.price).format("0,0");
          }
          if (content.payment_type === "free") {
            return "Үнэгүй";
          }
          if (content.payment_type === "membership") {
            return "Гишүүнчлэл";
          }
        }
        return "Unknown";
      },

      title: "Үнэ (₮)"
    },

    {
      dataIndex: "created_at",
      render: (item: string) => moment(item).format("YYYY/MM/DD HH:mm:ss"),
      sorter: (
        a: Vw_Organizations_Paid_Contents,
        b: Vw_Organizations_Paid_Contents
      ) => compare(a.created_at, b.created_at),
      title: "Үүсгэсэн",
      width: 180
    },
    {
      dataIndex: "id",
      render: (_: any, row: Vw_Organizations_Paid_Contents) => (
        <ButtonGroup>
          <Tooltip title="Нийтлэх эсэх">
            <Popconfirm
              title={row.is_published ? "Нуух уу?" : "Нийтлэх үү?"}
              okText="Тийм"
              cancelText="Үгүй"
              onConfirm={() => publish(row)}
            >
              <Button size="small" ghost>
                <Icon
                  type="check-circle"
                  style={{ color: row.is_published ? "green" : "#cecece" }}
                />
              </Button>
            </Popconfirm>
          </Tooltip>
          <Tooltip title="Засах">
            <Button
              href={`/contents/${row.id}/edit`}
              size="small"
              ghost
              style={{ color: "#cecece" }}
            >
              <Icon type="edit" />
            </Button>
          </Tooltip>
          <Tooltip title="Устгах">
            <Popconfirm
              title="Устгахдаа итгэлтэй байна уу?"
              okText="Тийм"
              cancelText="Үгүй"
              onConfirm={() => _delete(row)}
            >
              <Button size="small" ghost style={{ color: "#cecece" }}>
                <Icon type="delete" />
              </Button>
            </Popconfirm>
          </Tooltip>
        </ButtonGroup>
      ),
      title: <Icon type="setting" />,
      width: 150
    }
  ];

  return (
    <>
      <Row style={{ marginBottom: "20px" }}>
        <Col md={16}>
          <Button bordered href="/upload">
            <Icon type="cloud-upload" /> Контент оруулах
          </Button>
        </Col>
        <Col md={8}>
          <Input.Search
            name="query"
            onSearch={(q, e: any) => {
              e.preventDefault();
              setQuery(q);
            }}
            onChange={e => {
              e.preventDefault();
              if (e.target.value.length === 0) {
                setQuery("");
              }
            }}
            placeholder="Хайх..."
            className="esan-rounded-input"
          />
        </Col>
      </Row>
      <Table
        loading={contentsResult.loading}
        columns={columns}
        dataSource={dataSource}
        pagination={pagination}
        onChange={handleTableChange}
        size="small"
        style={{
          fontSize: "12px"
        }}
      />
    </>
  );
};

export default ListTable;
