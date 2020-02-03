import * as React from "react";
import { Form, Modal, message, Upload, Icon, Spin } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { UploadFile, UploadChangeParam } from "antd/lib/upload/interface";
import { useMutation } from "@apollo/react-hooks";
import { DataProxy } from "apollo-cache";
import { FetchResult } from "apollo-link";

import { CREATE_FILES } from "~/queries/files.graphql";
import { UPDATE_AUTHOR } from "~/queries/authors.graphql";
import {
  Create_FilesMutation,
  Create_FilesMutationVariables,
  Files_Insert_Input,
  Update_AuthorMutation,
  Update_AuthorMutationVariables
} from "~/generated/graphql";

import { useFileUpload } from "~/hooks/useFileUpload";
import { IUploadFileType } from "~/utils/helpers";

import "./style.less";

interface IProps extends FormComponentProps {
  isShow: boolean;
  setIsShow: (isShow: boolean) => void;
  update?: (proxy: DataProxy, result: FetchResult<any>) => void;
  id: any;
}

const AvatarUpload = (props: IProps) => {
  const { getFieldDecorator } = props.form;
  const [uploadFile] = useFileUpload();
  const [isLoading] = React.useState(false);
  const [isComplete, setIsComplete] = React.useState(false);
  const [imagePreview, setImagePreview] = React.useState();

  const [CreateFilesAction] = useMutation<
    Create_FilesMutation,
    Create_FilesMutationVariables
  >(CREATE_FILES);

  const [UpdateAuthorAction] = useMutation<
    Update_AuthorMutation,
    Update_AuthorMutationVariables
  >(UPDATE_AUTHOR);
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

  const uploadButton = (
    <div>
      <Icon type={isLoading ? "loading" : "picture"} />
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
        const fileData: Files_Insert_Input = {
          acl: "public",
          bucket: profileUpload.bucket,
          filename: profileUpload.name,
          key: profileUpload.key
        };

        const createFileResult = await CreateFilesAction({
          variables: {
            data: [fileData]
          }
        });

        if (createFileResult && createFileResult.data) {
          await UpdateAuthorAction({
            variables: {
              set: {
                avatar_id: profileUpload.key
              },
              where: { id: { _eq: props.id } }
            },
            update: props.update
          });
          setIsComplete(false);
          props.setIsShow(false);
          message.success("Амжилттай хадгаллаа");
        }
      });
    } catch (error) {
      message.error(error);
    }
  };

  return (
    <Modal
      visible={props.isShow}
      onCancel={() => props.setIsShow(false)}
      title="Зураг оруулах"
      okText="Үүсгэх"
      onOk={e => handleOk(e)}
    >
      <Spin spinning={isComplete} tip={"Хадгалж байна..."}>
        <Form>
          <Form.Item label="Профайл зураг">
            {getFieldDecorator("avatar", {
              rules: [
                {
                  message: "Профайл зураг оруулна уу",
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
        </Form>
      </Spin>
    </Modal>
  );
};

export default Form.create<IProps>()(AvatarUpload);
