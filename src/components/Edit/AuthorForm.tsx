import * as React from "react";
import { Form, Input, Modal, message, Spin, Upload, Icon } from "antd";
import { UploadChangeParam } from "antd/lib/upload";
import { UploadFile } from "antd/lib/upload/interface";
import { FormComponentProps } from "antd/lib/form";
import { useMutation } from "@apollo/react-hooks";
import { DataProxy } from "apollo-cache";
import { FetchResult } from "apollo-link";

import { useFileUpload } from "~/hooks/useFileUpload";

import { CREATE_AUTHOR } from "~/queries/authors.graphql";
import {
  Create_AuthorMutation,
  Create_AuthorMutationVariables,
  Authors_Insert_Input
} from "~/generated/graphql";
import { IUploadFileType } from "~/utils/helpers";
import "./style.less";

interface IProps extends FormComponentProps {
  isShow: boolean;
  setIsShow: (isShow: boolean) => void;
  update?: (proxy: DataProxy, result: FetchResult<any>) => void;
}

const AuthorForm = (props: IProps) => {
  const { getFieldDecorator } = props.form;
  const [uploadFile] = useFileUpload();
  const [isComplete, setIsComplete] = React.useState(false);
  const [imagePreview, setImagePreview] = React.useState();

  const [CreateAuthortAction] = useMutation<
    Create_AuthorMutation,
    Create_AuthorMutationVariables
  >(CREATE_AUTHOR);

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
      message.error("Та зөвхөн зурган файл оруулах боломжтой!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Зургийн хэмжээ  2MB-с ихгүй  байна.");
    }

    return false;
  };

  const handleLogoChange = async (info: UploadChangeParam) => {
    const imageUrl = await getBase64(info.file);
    setImagePreview(imageUrl);
  };

  const uploadButton = (
    <div>
      <Icon type={"picture"} />
      <div className="ant-upload-text">Зураг хуулах</div>
    </div>
  );

  const handleOk = (e: React.FormEvent) => {
    e.preventDefault();
    setIsComplete(true);
    try {
      props.form.validateFields(async (error, values) => {
        if (error) {
          throw error;
        }
        const profileUpload = await uploadFile(
          values.avatar.file,
          IUploadFileType.avatar
        );

        const data: Authors_Insert_Input = {
          description: values.author_desc,
          firstname: values.new_firstname,
          lastname: values.new_lastname,
          avatar: {
            data: {
              acl: "public",
              bucket: profileUpload.bucket,
              filename: profileUpload.name,
              key: profileUpload.key,
              region: "ap-southeast-1"
            }
          }
        };

        await CreateAuthortAction({
          update: props.update,
          variables: {
            data
          }
        });
        setIsComplete(false);
        props.setIsShow(false);
        message.success("Амжилттай");
      });
    } catch (error) {
      message.error(error);
    }
  };

  return (
    <Modal
      visible={props.isShow}
      onCancel={() => props.setIsShow(false)}
      title="Зохиолч шинээр оруулах"
      okText="Үүсгэх"
      onOk={e => handleOk(e)}
    >
      <Spin spinning={isComplete} tip={"Хадгалж байна..."}>
        <Form>
          <Form.Item label="Avatar оруулах">
            {getFieldDecorator("avatar", {
              rules: [
                {
                  message: "Avatar оруулна уу",
                  required: false
                }
              ]
            })(
              <Upload
                name="avatar"
                accept="image/jpeg, image/png"
                listType="picture-card"
                className="avatar-uploader"
                beforeUpload={beforeUpload}
                onChange={handleLogoChange}
                showUploadList={false}
              >
                {imagePreview ? (
                  <img src={imagePreview} style={{ width: "100%" }} />
                ) : (
                  uploadButton
                )}
              </Upload>
            )}
          </Form.Item>
          <Form.Item label="Овог">
            {getFieldDecorator("new_lastname", {
              rules: [
                {
                  message: "Please input the lastname !",
                  required: true
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Нэр">
            {getFieldDecorator("new_firstname", {
              rules: [
                {
                  message: "Please input the firstname !",
                  required: true
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Зохиолчийн товч танилцуулга">
            {getFieldDecorator("author_desc", { rules: [{ required: true }] })(
              <Input type="textarea" />
            )}
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
};

export default Form.create<IProps>()(AuthorForm);
