import * as React from "react";
import {
  Modal,
  Input,
  Form,
  message,
  Select,
  DatePicker,
  InputNumber
} from "antd";
import { FormComponentProps } from "antd/lib/form";
import { useQuery, useMutation } from "@apollo/react-hooks";
import moment from "moment";

import { CoverUpload } from "~/components/Upload/Upload";
import { useFileUpload } from "~/hooks/useFileUpload";

import { CREATE_PACKAGE } from "~/queries/package.graphql";
import { GET_LIST_CONTENTS } from "~/queries/contents.graphql";
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
const { RangePicker } = DatePicker;

interface IProps extends FormComponentProps {
  setNewpackage?: (newPackage: string) => void;
  visible: boolean;
  setVisible: (visible: boolean) => void;
  organization: any;
  role: any;
}
const CreatePromotion = (props: IProps) => {
  const [uploadFile] = useFileUpload();
  const [search, setSearch] = React.useState(null);
  const [isLoading, setloading] = React.useState(false);
  const { getFieldDecorator, setFieldsValue } = props.form;
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
          type: "promotion",
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
        props.setNewpackage(values.name + values.price + values.description);
        setFieldsValue({
          name: null,
          price: null,
          description: null,
          contents: null,
          start_date: null,
          expired_date: null
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
        <Form.Item label="Урамшууллын  нэр">
          {getFieldDecorator("name", {
            rules: [
              {
                message: "Урамшууллын нэр оруулна уу",
                required: true
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Үнэ">
          {getFieldDecorator("price", {
            rules: [
              {
                message: "Үнэ оруулна уу",
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
                message: "Урамшуулал зарлах контентуудыг соногоно уу",
                required: true
              }
            ]
          })(
            <Select
              className="select-form"
              mode="multiple"
              allowClear
              filterOption={filterOption}
              onSearch={e => setSearch(e)}
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
        <Form.Item label="Урамшуулал эхлэх дуусах огноо">
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
        {/* <Form.Item label="Урамшуулал эхлэх огноо">
          {getFieldDecorator("start_date", {
            rules: [
              {
                message: "Урамшуулал эхлэх огноо соногоно уу",
                required: true
              }
            ]
          })(<DatePicker
          onChange={(e) => setDday(e)}
          style={{ width: "100%" }} />)}
        </Form.Item>
        <Form.Item label="Урамшуулал дуусах огноо">
          {getFieldDecorator("expired_date", {
            rules: [
              {
                message: "Урамшуулал дуусах огноо соногоно уу",
                required: true
              }
            ]
          })(<DatePicker
          disabledDate={disabledDate}          
          style={{ width: "100%" }} />)}
        </Form.Item> */}
      </Form>
    </Modal>
  );
};

export default Form.create<IProps>()(CreatePromotion);
