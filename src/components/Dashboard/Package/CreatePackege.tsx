import * as React from "react";
import {
  Modal,
  Input,
  InputNumber,
  Form,
  message,
  Select,
  DatePicker
} from "antd";
import { FormComponentProps } from "antd/lib/form";
import { useQuery, useMutation } from "@apollo/react-hooks";

import { CoverUpload } from "~/components/Upload/Upload";
import { useFileUpload } from "~/hooks/useFileUpload";

import { GET_LIST_CONTENTS } from "~/queries/contents.graphql";
import { CREATE_PACKAGE } from "~/queries/package.graphql";
import {
  Create_PackageMutation,
  Create_PackageMutationVariables,
  Packages_Insert_Input,
  Get_List_ContentsQuery,
  Get_List_ContentsQueryVariables,
  Get_Aggregate_ContentsQueryVariables,
  Vw_Organizations_Paid_Contents_Bool_Exp
} from "~/generated/graphql";

import { IUploadFileType, filterOption } from "~/utils/helpers";

const { TextArea } = Input;
const Option = Select;

interface IProps extends FormComponentProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  organization: any;
  setNewpackage?: (newPackage: string) => void;
  role: any;
}
const CreatePackage = (props: IProps) => {
  const [uploadFile] = useFileUpload();
  const { RangePicker } = DatePicker;
  const { getFieldDecorator, setFieldsValue } = props.form;
  const [search, setSearch] = React.useState(null);
  const [isLoading, setloading] = React.useState(false);
  const initialVariables: Get_Aggregate_ContentsQueryVariables = {
    where: {
      deleted_at: {
        _is_null: true
      },
      organizations: {
        organization_id: {
          _eq: props.organization.id
        }
      }
    }
  };

  const contentsResult = useQuery<
    Get_List_ContentsQuery,
    Get_List_ContentsQueryVariables
  >(GET_LIST_CONTENTS, {
    context: {
      headers: {
        "X-Hasura-Role": props.role
      }
    },
    variables: {
      limit: 10,
      where: initialVariables.where
    }
  });

  React.useEffect(() => {
    let where: Vw_Organizations_Paid_Contents_Bool_Exp | null | undefined =
      initialVariables.where;
    if (search && search.length > 0) {
      where = {
        ...where,
        _or: ["name"].map(field => ({
          [field]: {
            _ilike: `%${search}%`
          }
        }))
      };
    }
    contentsResult.refetch({
      where
    });
  }, [search]);

  const [CreatePackageAction] = useMutation<
    Create_PackageMutation,
    Create_PackageMutationVariables
  >(CREATE_PACKAGE);

  const Create = (e: React.FormEvent) => {
    e.preventDefault();
    setloading(true);
    try {
      props.form.validateFields(async (error, values) => {
        if (error) {
          setloading(false);
          throw error;
        }
        const coverUpload = await uploadFile(
          values.cover.file,
          IUploadFileType.cover
        );

        const insertData: Packages_Insert_Input = {
          contents: {
            data: values.contents.map((id: any) => ({ content_id: id }))
          },
          description: values.description,
          name: values.name,
          organization_id: props.organization.id,
          price: values.price,
          type: "package",
          start_date: values.date_range[0],
          expired_at: values.date_range[1],
          file_connection: {
            data: [
              {
                file: {
                  data: {
                    acl: "public",
                    bucket: coverUpload.bucket,
                    filename: coverUpload.name,
                    key: coverUpload.key
                  }
                }
              }
            ]
          }
        };
        await CreatePackageAction({
          context: {
            headers: {
              "X-Hasura-Role": props.role
            }
          },
          variables: {
            data: insertData
          }
        });
        setloading(false);
        props.setVisible(false);
        message.success("Амжилттай");
        props.setNewpackage(values.name + values.price + values.description);
        setFieldsValue({
          name: null,
          price: null,
          description: null,
          contents: null,
          date_range: null
        });
      });
    } catch (error) {
      message.error(error);
    }
  };
  const { data } = contentsResult;

  return (
    <Modal
      title="Багц үүсгэх"
      visible={props.visible}
      onOk={Create}
      onCancel={() => props.setVisible(false)}
      okText="Хадгалах"
      cancelText="Цуцлах"
      confirmLoading={isLoading}
    >
      <Form>
        <CoverUpload form={props.form} />
        <Form.Item label="Багцын нэр">
          {getFieldDecorator("name", {
            rules: [
              {
                message: "Багцын нэр оруулна уу",
                required: true
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Үнэ">
          {getFieldDecorator("price", {
            rules: [
              {
                message: "Үнэ зөвхөн тоо оруулна уу",
                required: true
              }
            ]
          })(<InputNumber style={{ width: "100%" }} />)}
        </Form.Item>
        <Form.Item label="Тайлбар">
          {getFieldDecorator("description", {
            rules: [
              {
                message: "Тайлбар орууулна уу",
                required: true
              }
            ]
          })(<TextArea />)}
        </Form.Item>
        <Form.Item label="Контентууд">
          {getFieldDecorator("contents", {
            rules: [
              {
                message: "Багцад оруулах контентуудыг соногоно уу",
                required: true
              }
            ]
          })(
            <Select
              className="select-form"
              mode="multiple"
              allowClear
              filterOption={filterOption}
              notFoundContent="Одоогоор контент байхгүй байна."
              onSearch={e => setSearch(e)}
            >
              {data &&
                data.contents &&
                data.contents.map(({ id, name }) => (
                  <Option key={id} value={id}>
                    {name}
                  </Option>
                ))}
            </Select>
          )}
        </Form.Item>
        <Form.Item label="Контентын хамаарах огноо">
          {getFieldDecorator("date_range", {
            rules: [
              {
                message: "Огноо соногоно уу",
                required: true
              }
            ]
          })(
            <RangePicker
              style={{ width: "100%" }}
              format="YYYY-MM-DD "
              placeholder={["Эхлэх", "Дуусах"]}
            />
          )}
        </Form.Item>

        {/* <Form.Item label="Эхлэх огноо">
          {getFieldDecorator("start_date", {
            rules: [
              {
                message: "Эхлэх огноо соногоно уу",
                required: true
              }
            ]
          })(<DatePicker style={{ width: "100%" }} />)}
        </Form.Item>
        <Form.Item label="Дуусах огноо">
          {getFieldDecorator("expired_date", {
            rules: [
              {
                message: "Дуусах огноо соногоно уу",
                required: true
              }
            ]
          })(<DatePicker style={{ width: "100%" }} />)}
        </Form.Item> */}
      </Form>
    </Modal>
  );
};

export default Form.create<IProps>()(CreatePackage);
