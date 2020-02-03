import * as React from "react";
import { Form, Modal, message, Upload, Icon, Spin } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { UploadFile, UploadChangeParam } from "antd/lib/upload/interface";
import { useMutation } from "@apollo/react-hooks";
import { DataProxy } from "apollo-cache";
import { FetchResult } from "apollo-link";

import { useFileUpload } from "~/hooks/useFileUpload";

import { CREATE_FILES } from "~/queries/files.graphql";
import {
  Create_FilesMutation,
  Create_FilesMutationVariables,
  Files_Insert_Input,
  Update_OrganizationMutation,
  Update_OrganizationMutationVariables
} from "~/generated/graphql";
import { UPDATE_ORGANIZATION } from "~/queries/organizations.graphql";
import { IUploadFileType } from "~/utils/helpers";

import UserContext from "~/context";

import "./style.less";

interface IProps extends FormComponentProps {
  isShow: boolean;
  setIsShow: (isShow: boolean) => void;
  update?: (proxy: DataProxy, result: FetchResult<any>) => void;
  id: any;
}

const AvatarUpload = (props: IProps) => {
  const [user] = React.useContext(UserContext);
  const [uploadFile] = useFileUpload();
  const { getFieldDecorator } = props.form;
  const [isLoading, setLoading] = React.useState(false);
  const [isComplete, setIsComplete] = React.useState(false);
  const [imagePreview, setImagePreview] = React.useState();

  const [CreateFilesAction] = useMutation<
    Create_FilesMutation,
    Create_FilesMutationVariables
  >(CREATE_FILES);

  const [UpdateOrganizationAction] = useMutation<
    Update_OrganizationMutation,
    Update_OrganizationMutationVariables
  >(UPDATE_ORGANIZATION);

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

        const createFileResponse = await CreateFilesAction({
          update: props.update,
          variables: {
            data: [fileData]
          }
        });
        if (createFileResponse && createFileResponse.data) {
          await UpdateOrganizationAction({
            context: {
              headers: {
                "X-Hasura-Role":
                  user &&
                  user.roles_connection.length > 0 &&
                  user.roles_connection[0].role.name
              }
            },
            variables: {
              set: {
                avatar_id: profileUpload.key
              },
              where: { id: { _eq: props.id } }
            }
          });
          setIsComplete(false);
          props.setIsShow(false);
          message.success("Амжилттай");
        }
      });
    } catch (error) {
      setIsComplete(false);
      message.error(error);
    }
  };

  return (
    <Modal
      visible={props.isShow}
      onCancel={() => props.setIsShow(false)}
      title="Зураг оруулах"
      okText="Хадгалах"
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
