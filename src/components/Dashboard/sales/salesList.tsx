import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Card, Row, Col, Table, Input } from "antd";
import UserContext from "~/context";
import { PaginationConfig, SorterResult } from "antd/lib/table";
import moment from "moment";
import {
  GET_PAID_CONTENTS_AGGREGATE,
  GET_PAID_CONTENTS
} from "~/queries/payment.graphql";

import {
  Get_Paid_ContentsQuery,
  Get_Paid_ContentsQueryVariables,
  Payment_Vw_Paid_Contents_Bool_Exp,
  Payment_Vw_Paid_Contents_Order_By,
  Get_Paid_Contents_AggregateQuery,
  Organizations,
  Order_By,
  Content
} from "~/generated/graphql";
import { compare } from "~/utils/helpers";
import GraphBoard from "~/components/Dashboard/sales/graphBoard";
import "./style.less";

interface IProps {
  organization?: { __typename?: "organizations" } & Pick<
    Organizations,
    "id" | "name"
  >;
}

const ListPaidContents = (props: IProps) => {
  const [user] = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [filterDays, setFilterDays] = useState(null);
  const [pagination, setPagination] = useState<PaginationConfig>();
  const [filters, setFilters] = useState();
  const [sorter, setSorter] = useState<SorterResult<any>>();
  const initialVariables: Get_Paid_ContentsQueryVariables = {
    where: { organization_id: { _eq: props.organization.id } }
  };

  const contentResult = useQuery<
    Get_Paid_ContentsQuery,
    Get_Paid_ContentsQueryVariables
  >(GET_PAID_CONTENTS, {
    context: {
      headers: {
        "X-Hasura-Role":
          user &&
          user.roles_connection.length > 0 &&
          user.roles_connection[0].role.name
      }
    },
    variables: initialVariables
  });
  const aggregateResult = useQuery<
    Get_Paid_Contents_AggregateQuery,
    Get_Paid_ContentsQueryVariables
  >(GET_PAID_CONTENTS_AGGREGATE, {
    context: {
      headers: {
        "X-Hasura-Role":
          user &&
          user.roles_connection.length > 0 &&
          user.roles_connection[0].role.name
      }
    },
    variables: initialVariables
  });
  useEffect(() => {
    let limit = 10;
    let offset = 0;
    let where: Payment_Vw_Paid_Contents_Bool_Exp | null | undefined =
      initialVariables.where;
    let orderBy: Payment_Vw_Paid_Contents_Order_By[] | null | undefined = null;
    if (query && query.length > 0) {
      where = {
        ...where,
        _or: ["name"].map(field => ({
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
      orderBy = [
        {
          [sorter.columnKey]: sortDir
        }
      ];
    }

    if (filterDays) {
      const startdate = moment().add(-filterDays, "days");
      const date = moment(startdate).format("YYYY/MM/DD");
      where = {
        ...where,
        created_at: { _gte: date }
      };
    }

    contentResult.refetch({
      limit,
      offset,
      orderBy,
      where
    });

    aggregateResult.refetch({
      where
    });
  }, [query, pagination, filters, sorter, filterDays]);

  useEffect(() => {
    if (
      aggregateResult &&
      aggregateResult.data &&
      aggregateResult.data.payment_vw_paid_contents_aggregate &&
      aggregateResult.data.payment_vw_paid_contents_aggregate.aggregate
    ) {
      setPagination({
        ...pagination,
        total:
          aggregateResult.data.payment_vw_paid_contents_aggregate.aggregate
            .count || 0
      });
    }
  }, [contentResult, aggregateResult]);

  const handleTableChange = (
    paginationParam: PaginationConfig,
    filtersParam: Record<"name", string[]>,
    sorterParam: SorterResult<any>
  ) => {
    setPagination(paginationParam);
    setFilters(filtersParam);
    setSorter(sorterParam);
  };

  const calculateRevenue = (days: number) => {
    const stratdate = moment().add(-days, "days");
    const date = moment(stratdate).format("YYYY/MM/DD");

    const { data } = useQuery<
      Get_Paid_Contents_AggregateQuery,
      Get_Paid_ContentsQueryVariables
    >(GET_PAID_CONTENTS_AGGREGATE, {
      context: {
        headers: {
          "X-Hasura-Role":
            user &&
            user.roles_connection.length > 0 &&
            user.roles_connection[0].role.name
        }
      },
      variables: {
        where: {
          organization_id: { _eq: props.organization.id },
          created_at: { _gte: date }
        }
      }
    });
    const total =
      data &&
      data.payment_vw_paid_contents_aggregate &&
      data.payment_vw_paid_contents_aggregate.aggregate &&
      data.payment_vw_paid_contents_aggregate.aggregate.sum &&
      data.payment_vw_paid_contents_aggregate.aggregate.sum.total;

    if (total > 0) {
      return total;
    }
    return 0;
  };

  console.log("FILTERDAY:", filterDays);
  const { data, loading } = contentResult;
  const dataSource = (data && data.payment_vw_paid_contents) || [];

  const columns = [
    {
      dataIndex: "rowkey",
      title: "Контентын нэр",
      render: (_: string, row: any) => row.name
    },
    {
      dataIndex: "total",
      title: "Орлого",
      width: 200
    },
    {
      dataIndex: "created_at",
      render: (item: string) => moment(item).format("YYYY/MM/DD HH:mm:ss"),
      sorter: (a: Content, b: Content) => compare(a.created_at, b.created_at),
      title: "Огноо",
      width: 200
    },
    {
      dataIndex: "type",
      title: "Төрөл",
      width: 200
    }
  ];
  return (
    <>
      <Row gutter={16} style={{ marginTop: "30px" }}>
        <Col md={8}>
          <div className="payment_card" onClick={() => setFilterDays(365)}>
            Энэ жилд <h2>{calculateRevenue(365)}₮</h2>
          </div>
        </Col>
        <Col md={8}>
          <div className="payment_card" onClick={() => setFilterDays(30)}>
            Энэ сард <h2>{calculateRevenue(30)}₮</h2>
          </div>
        </Col>
        <Col md={8}>
          <div className="payment_card" onClick={() => setFilterDays(7)}>
            Энэ 7 хоногт <h2>{calculateRevenue(7)}₮</h2>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "30px", paddingLeft: "20px" }}>
        <Col md={12}>
          <h3>Борлуулалтын түүх</h3>
        </Col>
      </Row>
      <Row style={{ marginTop: "10px" }}>
        <Col md={24}>
          <Table
            rowKey="uniqkey"
            loading={loading}
            columns={columns}
            dataSource={dataSource}
            pagination={pagination}
            onChange={handleTableChange}
            size="small"
            style={{
              fontSize: "12px",
              border: "1px dashed #999",
              borderRadius: "5px"
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default ListPaidContents;
