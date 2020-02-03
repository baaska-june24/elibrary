import * as React from "react";
import { useState, useEffect, useContext } from "react";
import {
  Row,
  Col,
  Table,
  Icon,
  Input,
  Alert,
  Tooltip,
  Popconfirm,
  message
} from "antd";
import moment from "moment";
import {
  GET_ORGANIZATION_USERS,
  DELETE_MAP_USER_OTGANIZATIONS
} from "~/queries/organizations.graphql";
import { PaginationConfig, SorterResult } from "antd/lib/table";
import { useQuery, useMutation } from "@apollo/react-hooks";

import "../style.less";
import {
  Organizations,
  Get_Organization_UsersQuery,
  Get_Organization_UsersQueryVariables,
  Map_Users_Organizations_Order_By,
  Map_Users_Organizations_Bool_Exp,
  Delete_Map_User_OtganizationsMutation,
  Delete_Map_User_OtganizationsMutationVariables,
  Map_Users_Organizations,
  Order_By,
  Users
} from "~/generated/graphql";
import { setEmpty, compare } from "~/utils/helpers";
import Button from "~/components/Button";
import UserContext from "~/context";
import InviteForm from "~/components/Dashboard/Worker/workerInviteFrom";
import { async } from "q";
import { OmitProps } from "antd/lib/transfer/renderListBody";

interface IProps {
  organization?: { __typename?: "organizations" } & Pick<
    Organizations,
    "id" | "name"
  >;
}

type User = { __typename?: "users" } & Pick<
  Users,
  "id" | "email" | "created_at" | "firstname" | "lastname"
>;

const ListTable = ({ organization }: IProps) => {
  const [user]= useContext(UserContext);

  const [visible, setVisible] = useState(false);

  const [query, setQuery] = useState("");
  const [pagination, setPagination] = useState<PaginationConfig>();
  const [filters, setFilters] = useState();
  const [sorter, setSorter] = useState<SorterResult<any>>();
  const [del, setDel] = useState(false);
  const initialVariables: Get_Organization_UsersQueryVariables = {
    id: organization.id,
    where: { organization_id: { _eq: organization.id } }
  };

  const result = useQuery<
    Get_Organization_UsersQuery,
    Get_Organization_UsersQueryVariables
  >(GET_ORGANIZATION_USERS, {
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

  const [deleteAction] = useMutation<
    Delete_Map_User_OtganizationsMutation,
    Delete_Map_User_OtganizationsMutationVariables
  >(DELETE_MAP_USER_OTGANIZATIONS);

  useEffect(() => {
    let limit = 10;
    let offset = 0;
    let where: Map_Users_Organizations_Bool_Exp | null | undefined =
      initialVariables.where;
    let orderBy: Map_Users_Organizations_Order_By[] | null | undefined = null;
    if (query && query.length > 0) {
      where = {
        ...where,
        user: {
          _or: ["firstname", "lastname", "email"].map(field => ({
            [field]: {
              _ilike: `%${query}%`
            }
          }))
        }
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

    result.refetch({
      id: organization.id,
      limit,
      offset,
      orderBy,
      where
    });
  }, [query, pagination, filters, sorter, del]);

  useEffect(() => {
    if (
      result &&
      result.data &&
      result.data.organization &&
      result.data.organization.users_connection_aggregate &&
      result.data.organization.users_connection_aggregate.aggregate
    ) {
      setPagination({
        ...pagination,
        total:
          result.data.organization.users_connection_aggregate.aggregate.count ||
          0
      });
    }
  }, [result]);

  const handleTableChange = (
    // tslint:disable-next-line: variable-name
    _pagination: PaginationConfig,
    // tslint:disable-next-line: variable-name
    _filters: Record<
      "id" | "firstname" | "lastname" | "email" | "created_at",
      string[]
    >,
    // tslint:disable-next-line: variable-name
    _sorter: SorterResult<any>
  ) => {
    setPagination(_pagination);
    setFilters(_filters);
    setSorter(_sorter);
  };

  const delete_worker = async (id: any) => {
    await deleteAction({
      context: {
        headers: {
          "X-Hasura-Role":
            user &&
            user.roles_connection.length > 0 &&
            user.roles_connection[0].role.name
        }
      },
      variables: {
        organization_id: organization.id,
        user_id: id
      }
    });
    setDel(!del);
    message.success("Амжилттай устгалаа");
  };

  const { data, error, loading } = result;

  if (error) {
    return <Alert message={error.message} type="error" />;
  }

  const dataSource =
    (data && data.organization && data.organization.users_connection) || [];

  const columns = [
    {
      dataIndex: "user.lastname",
      render: (item: string) => item,
      sorter: (a: User, b: User) => compare(a.lastname, b.lastname),
      title: "Овог"
    },
    {
      dataIndex: "user.firstname",
      render: (item: string) => item,
      sorter: (a: User, b: User) => compare(a.firstname, b.firstname),
      title: "Нэр"
    },
    {
      dataIndex: "user.email",
      render: (item: string) => item,
      title: "Email"
    },
    {
      dataIndex: "user.created_at",
      render: (item: string) => moment(item).format("YYYY/MM/DD HH:mm:ss"),
      sorter: (a: User, b: User) => compare(a.created_at, b.created_at),
      title: "Үүсгэсэн"
    },
    {
      dataIndex: "role",
      render: (orgRole: string) => {
        if (orgRole) {
          if (orgRole === "organization_worker") {
            return "Ажилтан";
          } else if (orgRole === "organization_manager") {
            return "Менежер";
          } else {
            return "Esan";
          }
        }
      },
      title: "Эрх"
    },
    {
      dataIndex: "user.id",
      render: (id: any, OrgRole: Map_Users_Organizations) => {
        if (
          (OrgRole && OrgRole.role === "organization_manager") ||
          (user &&
            user.roles_connection.filter(
              ({ role }: any) =>
                ["admin", "content_manager", "organization_manager"].indexOf(
                  role.name
                ) > -1
            ).length > 0)
        ) {
          return (
            <Tooltip title="Устгах">
              <Popconfirm
                title="Та энэ ажилтаныг байгууллагаас хасахдаа итгэлтэй байна уу?"
                okText="Тийм"
                cancelText="Үгүй"
                onConfirm={() => delete_worker(id)}
              >
                <Button size="small" ghost style={{ color: "#cecece" }}>
                  <Icon type="delete" />
                </Button>
              </Popconfirm>
            </Tooltip>
          );
        } else {
          return null;
        }
      },
      title: ""
    }
  ];

  return (
    <>
      <Row style={{ marginBottom: "20px" }}>
        <Col md={16}>
          <Button bordered onClick={() => setVisible(true)}>
            <Icon type="cloud-upload" /> Урих
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
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={pagination}
        onChange={handleTableChange}
        size="small"
        style={{
          fontSize: "12px"
        }}
      />
      <InviteForm
        visible={visible}
        setVisible={setVisible}
        organization={organization}
      />
    </>
  );
};

export default ListTable;
