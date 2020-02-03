import * as React from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import axios from "axios";
import { IUploadFileType, IFileInfo } from "~/utils/helpers";

const mutation = gql`
  mutation GET_SIGNED_URL($name: String!, $path: String, $is_public: Boolean) {
    getSignedUrl(name: $name, path: $path, is_public: $is_public) {
      data
      key
      bucket
      contentType
    }
  }
`;

export const useFileUpload = (): [
  (file: File, type: IUploadFileType) => Promise<IFileInfo>,
  any
] => {
  const [error, setError] = React.useState(null);
  const [handleAction] = useMutation(mutation, {
    onError: setError
  });

  const handleSubmit = (file: File, type: IUploadFileType) =>
    new Promise<IFileInfo>(async (resolve, reject) => {
      try {
        let binary: File;
        if (!file) {
          throw new Error("File field is required!");
        }

        if ((file as any).originFileObj) {
          binary = (file as any).originFileObj;
        } else {
          binary = file;
        }
        // request signed url
        const variables: any = {
          name: binary.name
        };

        if (type !== IUploadFileType.content) {
          variables.is_public = true;
          variables.path = IUploadFileType[type];
        }

        const result = await handleAction({
          variables
        });

        if (result && result.data) {
          const { data, key, bucket } = result.data.getSignedUrl;

          const { url, fields } = JSON.parse(data);

          // upload file using signed url
          const formData = new FormData();

          Object.keys(fields).forEach(key => {
            formData.append(key, fields[key]);
          });

          formData.append("file", binary);

          await axios
            .post(url, formData, {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            })
            .then(() => {
              resolve({
                bucket,
                key,
                name: binary.name
              });
            })
            .catch(reject);
        }

        setError(null);
      } catch (error) {
        setError(error);
        reject(error);
      }
    });
  return [handleSubmit, error];
};
