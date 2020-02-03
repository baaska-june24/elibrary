import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
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
import UserContext from "~/context";
import { PaginationConfig, SorterResult } from "antd/lib/table";
import moment from "moment";
import {
  GET_PACKAGES,
  GET_PACKAGES_AGGREGATE,
  DELETE_PACKAGE
} from "~/queries/package.graphql";
import {
  Organizations,
  Get_PackagesQueryVariables,
  Get_PackagesQuery,
  Get_Packages_AggregateQuery,
  Get_Packages_AggregateQueryVariables,
  Packages_Bool_Exp,
  Packages_Order_By,
  Order_By,
  Delete_PackageMutation,
  Delete_PackageMutationVariables,
  Packages,
  Files
} from "~/generated/graphql";
import CreatePromotion from "./CreatePromotion";
import UpdatePormotion from "./UpdatePormotion";
import Button from "~/components/Button";
import { getImageUrl, canLoadWebp, setEmpty } from "~/utils/helpers";
import { type } from "os";

interface IProps {
  organization?: { __typename?: "organizations" } & Pick<
    Organizations,
    "id" | "name"
  >;
  role?: any;
}

type Package = Pick<
  Packages,
  "id" | "name" | "meta" | "type" | "created_at"
> & {
  file_connection: Array<
    { __typename?: "map_packages_files" } & {
      file: { __typename?: "files" } & Pick<
        Files,
        "acl" | "bucket" | "filename" | "key" | "region"
      >;
    }
  >;
};

const PromotionList = (props: IProps) => {
  const [user]= useContext(UserContext);
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isSelected, setIsSelected] = useState(null);
  const [pagination, setPagination] = useState<PaginationConfig>();
  const [filters, setFilters] = useState();
  const [sorter, setSorter] = useState<SorterResult<any>>();
  const [newPackage, setNewpackage] = useState("");
  const initialVariables: Get_PackagesQueryVariables = {
    where: {
      organization_id: { _eq: props.organization.id },
      type: { _eq: "promotion" }
    }
  };

  const packagesResult = useQuery<
    Get_PackagesQuery,
    Get_PackagesQueryVariables
  >(GET_PACKAGES, {
    context: {
      headers: {
        "X-Hasura-Role": props.role
      }
    },
    variables: initialVariables
  });
  const aggregateResult = useQuery<
    Get_Packages_AggregateQuery,
    Get_Packages_AggregateQueryVariables
  >(GET_PACKAGES_AGGREGATE, {
    context: {
      headers: {
        "X-Hasura-Role": props.role
      }
    },
    variables: initialVariables
  });

  const [deletePackageAction] = useMutation<
    Delete_PackageMutation,
    Delete_PackageMutationVariables
  >(DELETE_PACKAGE);

  useEffect(() => {
    let limit = 10;
    let offset = 0;
    let where: Packages_Bool_Exp | null | undefined = initialVariables.where;
    let orderBy: Packages_Order_By[] | null | undefined = null;
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

    packagesResult.refetch({
      limit,
      offset,
      orderBy,
      where
    });

    aggregateResult.refetch({
      where
    });
  }, [query, pagination, filters, sorter, newPackage]);

  useEffect(() => {
    if (
      aggregateResult &&
      aggregateResult.data &&
      aggregateResult.data.packages_aggregate &&
      aggregateResult.data.packages_aggregate.aggregate
    ) {
      setPagination({
        ...pagination,
        total: aggregateResult.data.packages_aggregate.aggregate.count || 0
      });
    }
  }, [packagesResult, aggregateResult]);
  const handleTableChange = (
    paginationParam: PaginationConfig,
    filtersParam: Record<"name" | "id" | "meta", string[]>,
    sorterParam: SorterResult<any>
  ) => {
    setPagination(paginationParam);
    setFilters(filtersParam);
    setSorter(sorterParam);
  };
  const { data, error, loading } = packagesResult;

  if (error) {
    return <Alert message={error.message} type="error" />;
  }

  const updatePackage = (item: any) => {
    setIsShow(true);
    if (!isShow) {
      setIsSelected(item.id);
    }
  };

  const deletePackage = async (pack: any) => {
    try {
      await deletePackageAction({
        context: {
          headers: {
            "X-Hasura-Role": props.role
          }
        },
        variables: {
          where: {
            id: { _eq: pack.id }
          }
        }
      });
      setNewpackage(pack.id);
      message.success("Амжилттай устгалаа!");
    } catch (error) {
      message.error(error.message);
    }
  };

  const dataSource = (data && data.packages) || [];

  const columns = [
    {
      dataIndex: "name",
      render: (text: string, pack: Package) => {
        const coverFile: any =
          (pack.file_connection &&
            pack.file_connection.length > 0 &&
            pack.file_connection[0]) ||
          null;
        let coverUrl = null;
        if (coverFile && coverFile.file_id) {
          const key = unescape(encodeURIComponent(coverFile.file_id));
          const imageRequest = JSON.stringify({
            bucket: data.packages[0].file_connection[0].file.bucket,
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
            <img src={coverUrl} className="content-list-cover" />{" "}
            <span>{setEmpty(text)}</span>
          </>
        );
      },
      title: "Нэр"
    },
    {
      dataIndex: "description",
      render: (item: string) => item,
      title: "Тайлбар"
    },
    {
      dataIndex: "price",
      render: (item: string) => item,
      title: "Үнэ"
    },
    {
      dataIndex: "start_date",
      render: (item: string) => moment(item).format("YYYY/MM/DD"),

      title: "Эхлэх"
    },
    {
      dataIndex: "expired_at",
      render: (item: string) => moment(item).format("YYYY/MM/DD"),

      title: "Дуусах"
    },
    {
      dataIndex: "is_active",
      render: (_: any, item: any) =>
        item.is_active ? (
          <div style={{ color: "green" }}>Зөвшөөрсөн</div>
        ) : (
          <div style={{ color: "#cecece" }}>Зөвшөөрөөгүй</div>
        ),

      title: "Статус"
    },
    {
      dataIndex: "id",
      render: (_: any, item: any) => (
        <>
          <Tooltip title="Засах">
            <Button
              size="small"
              ghost
              style={{ color: "#cecece" }}
              onClick={() => updatePackage(item)}
            >
              <Icon type="edit" />
            </Button>
          </Tooltip>
          <Popconfirm
            title="Устгахдаа итгэлтэй байна уу?"
            okText="Тийм"
            cancelText="Үгүй"
            onConfirm={() => deletePackage(item)}
          >
            <Button size="small" ghost style={{ color: "#cecece" }}>
              <Icon type="delete" />
            </Button>
          </Popconfirm>
        </>
      ),
      title: <Icon type="setting" />
    }
  ];
  return (
    <>
      <Row style={{ marginBottom: "20px" }}>
        <Col md={16}>
          <Button bordered onClick={() => setVisible(true)}>
            <Icon type="cloud-upload" /> Урамшуулал үүсгэх
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
      <CreatePromotion
        visible={visible}
        setVisible={setVisible}
        organization={props.organization}
        setNewpackage={setNewpackage}
        role={props.role}
      />
      {isSelected && (
        <UpdatePormotion
          isShow={isShow}
          setIsShow={setIsShow}
          organization={props.organization}
          item={isSelected}
          setNewpackage={setNewpackage}
          role={props.role}
        />
      )}
    </>
  );
};

export default PromotionList;
