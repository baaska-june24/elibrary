import * as React from "react";
import { Modal, Input, Form, message, Select } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { useQuery, useMutation } from "@apollo/react-hooks";

import { CoverUpload } from "~/components/Upload/Upload";
import { useFileUpload } from "~/hooks/useFileUpload";

import {
  UPDATE_PACKAGE,
  GET_PACKAGES,
  DELETE_MAP_CONTENTS_PACKAGE,
  INSERT_MAP_CONTENTS_PACKAGE,
  INSERT_MAP_PACKAGES_FILES,
  DELETE_MAP_PACKAGES_FILES
} from "~/queries/package.graphql";
import { GET_LIST_CONTENTS } from "~/queries/contents.graphql";
import {
  Update_PackageMutation,
  Update_PackageMutationVariables,
  Get_List_ContentsQuery,
  Get_List_ContentsQueryVariables,
  Get_Aggregate_ContentsQueryVariables,
  Delete_Map_Contents_PackageMutation,
  Delete_Map_Contents_PackageMutationVariables,
  Insert_Map_Contents_PackageMutation,
  Insert_Map_Contents_PackageMutationVariables,
  Get_PackagesQuery,
  Get_PackagesQueryVariables,
  Insert_Map_Packages_FilesMutation,
  Insert_Map_Packages_FilesMutationVariables,
  Delete_Map_Packages_FilesMutation,
  Delete_Map_Packages_FilesMutationVariables,
  Vw_Organizations_Paid_Contents_Bool_Exp
} from "~/generated/graphql";

import { getImageUrl, IUploadFileType, filterOption } from "~/utils/helpers";

const { TextArea } = Input;
const Option = Select;

interface IProps extends FormComponentProps {
  isShow: boolean;
  setIsShow: (visible: boolean) => void;
  organization: any;
  item: any;
  role: any;
  setNewpackage?: (newPackage: string) => void;
}
const UpdatePackage = (props: IProps) => {
  const { getFieldDecorator } = props.form;
  const [uploadFile] = useFileUpload();
  const [isLoading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState(null);

  const variables: Get_PackagesQueryVariables = {
    where: { id: { _eq: props.item } }
  };

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

  const packageData = useQuery<Get_PackagesQuery, Get_PackagesQueryVariables>(
    GET_PACKAGES,
    {
      context: {
        headers: {
          "X-Hasura-Role": props.role
        }
      },
      variables: {
        where: variables.where
      }
    }
  );

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
      limit: 30,
      where: {
        deleted_at: {
          _is_null: true
        },
        organizations: {
          organization_id: {
            _eq: props.organization.id
          }
        },
        id: {
          _in:
            packageData &&
            packageData.data &&
            packageData.data.packages &&
            packageData.data.packages[0].contents.map(
              (content: any) => content.content.id
            )
        }
      }
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

  const [InsertMapPackageFiles] = useMutation<
    Insert_Map_Packages_FilesMutation,
    Insert_Map_Packages_FilesMutationVariables
  >(INSERT_MAP_PACKAGES_FILES);

  const [DeleteMapPackageFiles] = useMutation<
    Delete_Map_Packages_FilesMutation,
    Delete_Map_Packages_FilesMutationVariables
  >(DELETE_MAP_PACKAGES_FILES);

  const [DeleteMapContentPackage] = useMutation<
    Delete_Map_Contents_PackageMutation,
    Delete_Map_Contents_PackageMutationVariables
  >(DELETE_MAP_CONTENTS_PACKAGE);

  const [InsertMapContentPackage] = useMutation<
    Insert_Map_Contents_PackageMutation,
    Insert_Map_Contents_PackageMutationVariables
  >(INSERT_MAP_CONTENTS_PACKAGE);

  const [UpdatePackageAction] = useMutation<
    Update_PackageMutation,
    Update_PackageMutationVariables
  >(UPDATE_PACKAGE);

  const Update = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      props.form.validateFields(async (error, values) => {
        // debugger;
        // console.log(values.contents.map((id: any) => ({ content_id: id })));

        if (error) {
          setLoading(false);
          throw error;
        }
        await UpdatePackageAction({
          context: {
            headers: {
              "X-Hasura-Role": props.role
            }
          },
          variables: {
            where: {
              id: { _eq: props.item }
            },
            set: {
              name: values.name,
              description: values.description
            }
          }
        });

        if (values.cover !== undefined) {
          const DeleteCover = await DeleteMapPackageFiles({
            context: {
              headers: {
                "X-Hasura-Role": props.role
              }
            },
            variables: {
              where: {
                package_id: {
                  _eq: props.item
                }
              }
            }
          });

          if (DeleteCover && DeleteCover.data) {
            const coverUpload = await uploadFile(
              values.cover.file,
              IUploadFileType.cover
            );

            await InsertMapPackageFiles({
              context: {
                headers: {
                  "X-Hasura-Role": props.role
                }
              },
              variables: {
                data: {
                  package_id: props.item,
                  file: {
                    data: {
                      acl: "public",
                      bucket: coverUpload.bucket,
                      filename: coverUpload.name,
                      key: coverUpload.key
                    }
                  }
                }
              }
            });
          }
        }

        const DeleteResponse = await DeleteMapContentPackage({
          context: {
            headers: {
              "X-Hasura-Role": props.role
            }
          },
          variables: {
            where: {
              package_id: {
                _eq: props.item
              }
            }
          }
        });

        if (DeleteResponse && DeleteResponse.data) {
          // const insertData: Map_Contents_Packages_Insert_Input = {
          //   package_id: props.item,
          //   content_id: values.contents.map((id: any) => id)[0]
          // };
          values.contents.map(async (id: any) => {
            await InsertMapContentPackage({
              context: {
                headers: {
                  "X-Hasura-Role": props.role
                }
              },
              variables: {
                data: { package_id: props.item, content_id: id }
              }
            });
          });
        }

        setLoading(false);
        props.setIsShow(false);
        props.setNewpackage(values.name + values.price + values.description);
        message.success("Амжилттай");
      });
    } catch (error) {
      message.error(error);
    }
  };
  const { data } = contentsResult;

  const packag =
    packageData &&
    packageData.data &&
    packageData.data.packages &&
    packageData.data.packages[0];
  if (packag) {
    const coverFile: any =
      (packag.file_connection &&
        packag.file_connection.length > 0 &&
        packag.file_connection[0]) ||
      null;
    let coverUrl = null;
    if (coverFile && coverFile.file_id) {
      const key = unescape(encodeURIComponent(coverFile.file_id));
      const imageRequest = JSON.stringify({
        bucket: packag.file_connection[0].file.bucket,
        edits: {
          resize: {
            fit: "contain",
            width: "100%"
          },
          jpeg: {
            quality: 100
          }
        },
        key
      });
      coverUrl = getImageUrl(imageRequest);
    }

    return (
      <Modal
        title="Цуврал засах"
        visible={props.isShow}
        onOk={Update}
        onCancel={() => props.setIsShow(false)}
        okText="Хадгалах"
        cancelText="Цуцлах"
      >
        <Form>
          <CoverUpload form={props.form} cover={coverUrl} />
          <Form.Item label="Цувралын нэр">
            {getFieldDecorator("name", {
              rules: [
                {
                  message: "Цувралын нэр оруулна уу",
                  required: true
                }
              ],
              initialValue: packag.name
            })(<Input />)}
          </Form.Item>

          <Form.Item label="Тайлбар">
            {getFieldDecorator("description", {
              rules: [
                {
                  message: "Тайлбар орууулна уу",
                  required: true
                }
              ],

              initialValue: packag.description
            })(<TextArea />)}
          </Form.Item>
          <Form.Item label="Контентууд">
            {getFieldDecorator("contents", {
              rules: [
                {
                  message: "Цувралд оруулах контентуудыг сонгоно уу",
                  required: true
                }
              ],
              initialValue: packag.contents.map(({ content }) => content.id)
            })(
              <Select
                onSearch={e => setSearch(e)}
                className="select-form"
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
  }
  return null;
};

export default Form.create<IProps>()(UpdatePackage);
