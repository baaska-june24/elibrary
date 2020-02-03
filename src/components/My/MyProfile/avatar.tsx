import * as React from "react";
import "./style.less";
import { Form, message, Upload, Icon, Button, Spin } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { UploadFile, UploadChangeParam } from "antd/lib/upload/interface";
import { useMutation } from "@apollo/react-hooks";

import { useFileUpload } from "~/hooks/useFileUpload";

import { CREATE_USER_FILES, UPDATE_USER_FILES } from "~/queries/users.graphql";
import {
  Create_User_FilesMutation,
  Create_User_FilesMutationVariables,
  Map_Users_Files_Insert_Input,
  Update_User_FilesMutation,
  Update_User_FilesMutationVariables
} from "~/generated/graphql";
import { IUploadFileType, getImageUrl } from "~/utils/helpers";
import UserContext from "~/context";

interface IProps extends FormComponentProps {
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
    Create_User_FilesMutation,
    Create_User_FilesMutationVariables
  >(CREATE_USER_FILES);

  React.useEffect(() => {
    if (user && user.files_connection && user.files_connection.length > 0) {
      const imageRequest = JSON.stringify({
        bucket: user.files_connection[0].file.bucket,
        edits: {
          resize: {
            fit: "contain",
            height: 500,
            width: 500
          },
          jpeg: {
            quality: 80
          }
        },
        key: user.files_connection[0].file_avatar
      });
      const avatarUrl = getImageUrl(imageRequest);

      setImagePreview(avatarUrl);
    }
  }, [user]);

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

  const handleSubmit = (e: React.FormEvent) => {
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
        const fileData: Map_Users_Files_Insert_Input = {
          file: {
            data: {
              acl: "public",
              bucket: profileUpload.bucket,
              filename: profileUpload.name,
              key: profileUpload.key,
              region: "ap-southeast-1"
            }
          },
          // file_id: profileUpload.key,
          type: "avatar"
        };

        const createFileResponse = await CreateFilesAction({
          variables: {
            data: [fileData]
          }
        });

        if (createFileResponse && createFileResponse.data) {
          setIsComplete(false);
          message.success("Амжилттай");
        }
      });
    } catch (error) {
      setIsComplete(false);
      message.error(error);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Spin spinning={isComplete} tip={"Хадгалж байна..."}>
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
        <Button shape="round" htmlType="submit" icon="cloud-upload">
          Хадгалах
        </Button>
      </Spin>
    </Form>
  );
};

export default Form.create<IProps>()(AvatarUpload);
