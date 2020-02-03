import * as React from "react";
import { useContext, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import {
  Card,
  Row,
  Col,
  Form,
  Input,
  Select,
  Upload,
  message,
  notification,
  Icon
} from "antd";
import FormItem from "antd/lib/form/FormItem";
import { UploadChangeParam } from "antd/lib/upload";
import { UploadFile } from "antd/lib/upload/interface";
import { FormComponentProps } from "antd/lib/form";

import Button from "~/components/Button";
import { useFileUpload } from "~/hooks/useFileUpload";

import {
  Create_Organization_RequestMutation,
  Create_Organization_RequestMutationVariables,
  Organizations_Insert_Input
} from "~/generated/graphql";
import { CREATE_ORGANIZATION_REQUEST } from "./query.graphql";
import UserContext from "~/context";
import { IUploadFileType } from "~/utils/helpers";

import "./style.less";

const { Option } = Select;

interface IProps extends FormComponentProps {}

const OrganizationForm = (props: IProps) => {
  const { getFieldDecorator } = props.form;
  const [user] = useContext(UserContext);
  const [uploadFile] = useFileUpload();
  const [createOrganizationRequest] = useMutation<
    Create_Organization_RequestMutation,
    Create_Organization_RequestMutationVariables
  >(CREATE_ORGANIZATION_REQUEST);
  const [imagePreview, setImagePreview] = useState();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    props.form.validateFields(async (error, values) => {
      if (error) {
        notification.error({
          description: (
            <ol style={{ paddingLeft: "1rem" }}>
              {Object.keys(error).map(key => (
                <li key={key}>{error[key].errors[0].message}</li>
              ))}
            </ol>
          ),
          message: "Дараах мэдээллүүдийг бөглөнө үү!"
        });
        return;
      }

      const profileUpload = await uploadFile(
        values.avatar.file,
        IUploadFileType.avatar
      );

      const data: Organizations_Insert_Input = {
        ...values,
        avatar: {
          data: {
            acl: "public",
            bucket: profileUpload.bucket,
            filename: profileUpload.name,
            key: profileUpload.key
          }
        }
      };

      await createOrganizationRequest({
        variables: {
          data
        }
      });

      notification.success({
        description: "Таны хүсэлтийг хүлээн авлаа!",
        message: "Харилцагч болох хүсэлт"
      });

      props.form.resetFields();
    });
  };

  function getBase64(file: UploadFile | File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file as any);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  const beforeUpload = (file: File) => {
    const isImage = ["image/jpeg", "image/png"].indexOf(file.type) > -1;
    if (!isImage) {
      message.error("You can only upload image file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }

    return false;
  };

  const handleLogoChange = async (info: UploadChangeParam) => {
    const imageUrl = await getBase64(info.file);
    setImagePreview(imageUrl);
  };

  return (
    <div className="organization-form-wrapper">
      <Row type="flex" justify="center" align="middle">
        <Col xs={20} sm={20} md={18}>
          <Card title="Харилцагч болох хүсэлт">
            <Form onSubmit={handleSubmit}>
              <Row gutter={32}>
                <Col span={12}>
                  {" "}
                  <FormItem label="Лого">
                    {getFieldDecorator("avatar", {
                      rules: [
                        {
                          message: "Лого оруулна уу",
                          required: true
                        }
                      ]
                    })(
                      <Upload
                        name="avatar"
                        listType="picture-card"
                        accept="image/jpeg,image/png"
                        showUploadList={false}
                        onChange={handleLogoChange}
                        beforeUpload={beforeUpload}
                      >
                        {imagePreview ? (
                          <img src={imagePreview} style={{ width: "100%" }} />
                        ) : (
                          <>
                            <Icon type={"plus"} />
                            <div className="ant-upload-text">Хуулах</div>
                          </>
                        )}
                      </Upload>
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  {" "}
                  <FormItem label="Харилцагчийн нэр">
                    {getFieldDecorator("name", {
                      rules: [
                        {
                          message: "Харилцагчийн нэр сонгоно уу",
                          required: true
                        }
                      ]
                    })(<Input />)}
                  </FormItem>
                </Col>
              </Row>
              <Row gutter={32}>
                <Col span={12}>
                  <FormItem label="Харилцагчийн төрөл">
                    {getFieldDecorator("type", {
                      initialValue: "company",
                      rules: [
                        {
                          message: "Харилцагчийн төрөл сонгоно уу",
                          required: true
                        }
                      ]
                    })(
                      <Select>
                        <Option value="company">Байгууллага</Option>
                        <Option value="school">Сургууль</Option>
                        <Option value="individual">Хувь хүн</Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem label="Регистрийн дугаар">
                    {getFieldDecorator("registration", {
                      rules: [
                        {
                          message: "Регистрийн дугаар оруулна уу",
                          required: true
                        }
                      ]
                    })(<Input />)}
                  </FormItem>
                </Col>
              </Row>
              <Row gutter={32}>
                <Col span={12}>
                  <FormItem label="Утасны дугаар">
                    {getFieldDecorator("phone", {
                      initialValue: user && user.phone,
                      rules: [
                        {
                          message: "Утасны дугаар оруулна уу",
                          required: true
                        }
                      ]
                    })(<Input />)}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem label="Имэйл хаяг">
                    {getFieldDecorator("email", {
                      initialValue: user && user.email,
                      rules: [
                        {
                          message: "Имэйл хаяг оруулна уу",
                          required: true
                        }
                      ]
                    })(<Input />)}
                  </FormItem>
                </Col>
              </Row>

              <FormItem label="Товч танилцуулга">
                {getFieldDecorator("description", {
                  rules: [
                    {
                      message: "Товч танилцуулга оруулна уу",
                      required: true
                    }
                  ]
                })(<Input.TextArea rows={10} />)}
              </FormItem>
              <FormItem label="Дансны мэдээлэл">
                {getFieldDecorator("account_info", {
                  rules: [
                    {
                      message: "Дансны мэдээлэл оруулна уу",
                      required: true
                    }
                  ]
                })(
                  <Input.TextArea
                    rows={3}
                    placeholder="Банкны нэр, Дансны дугаар, Хүлээн авагчийн нэр"
                  />
                )}
              </FormItem>
              <Button block type="primary" htmlType="submit">
                Хүсэлт илгээх
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Form.create()(OrganizationForm);
