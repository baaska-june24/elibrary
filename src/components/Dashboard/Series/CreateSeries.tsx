import * as React from "react";
import { Modal, Input, Form, message, Select } from "antd";
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
  setNewpackage?: (newPackage: string) => void;
  visible: boolean;
  setVisible: (visible: boolean) => void;
  organization: any;
  role: any;
}
const CreateSeries = (props: IProps) => {
  const { getFieldDecorator, setFieldsValue } = props.form;
  const [uploadFile] = useFileUpload();
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
          price: "0",
          type: "series",
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
        props.setNewpackage(values.name + values.description);
        setFieldsValue({
          name: null,
          description: null,
          contents: null
        });
        message.success("Амжилттай");
      });
    } catch (error) {
      message.error(error);
    }
  };
  const { data } = contentsResult;

  return (
    <Modal
      title="Цуврал үүсгэх"
      visible={props.visible}
      onOk={Create}
      onCancel={() => props.setVisible(false)}
      okText="Хадгалах"
      cancelText="Цуцлах"
      confirmLoading={isLoading}
    >
      <Form>
        <CoverUpload form={props.form} />
        <Form.Item label="Цувралын нэр">
          {getFieldDecorator("name", {
            rules: [
              {
                message: "Цувралын нэр оруулна уу",
                required: true
              }
            ]
          })(<Input />)}
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
                message: "Цувралд багтах оруулах контентуудыг соногоно уу",
                required: true
              }
            ]
          })(
            <Select
              className="select-form"
              onSearch={e => setSearch(e)}
              mode="multiple"
              allowClear
              filterOption={filterOption}
              notFoundContent="Одоогоор контент байхгүй байна."
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
      </Form>
    </Modal>
  );
};

export default Form.create<IProps>()(CreateSeries);
