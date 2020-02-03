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
const { RangePicker } = DatePicker;

interface IProps extends FormComponentProps {
  setNewpackage?: (newPackage: string) => void;
  isShow: boolean;
  setIsShow: (visible: boolean) => void;
  organization: any;
  item: any;
  role: any;
}
const UpdatePackage = (props: IProps) => {
  const { getFieldDecorator } = props.form;
  const [uploadFile] = useFileUpload();
  const [isLoading, setloading] = React.useState(false);
  const [search, setSearch] = React.useState(null);

  const variables: Get_PackagesQueryVariables = {
    where: { id: { _eq: props.item } }
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
      // id: {
      //   _in:
      //     packageData &&
      //     packageData.data &&
      //     packageData.data.packages &&
      //     packageData.data.packages[0].contents.map(
      //       (content: any) => content.content.id
      //     )
      // }
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
    setloading(true);
    try {
      props.form.validateFields(async (error, values) => {
        // debugger;
        // console.log(values.contents.map((id: any) => ({ content_id: id })));

        if (error) {
          setloading(false);
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
              price: values.price,
              description: values.description,
              expired_at: values.date_range[0],
              start_date: values.date_range[1]
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

        setloading(false);
        props.setIsShow(false);
        props.setNewpackage(values.name + values.price + values.description);
        message.success("Амжилттай");
      });
    } catch (error) {
      message.error(error);
    }
  };
  const { data } = contentsResult;
  const dateFormat = "YYYY-MM-DD";
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
        title="Урамшуулал засах"
        visible={props.isShow}
        onOk={Update}
        onCancel={() => props.setIsShow(false)}
        okText="Хадгалах"
        cancelText="Цуцлах"
        confirmLoading={isLoading}
      >
        <Form>
          <CoverUpload form={props.form} cover={coverUrl} />
          <Form.Item label="Урамшууллын нэр">
            {getFieldDecorator("name", {
              rules: [
                {
                  message: "Урамшууллын нэр оруулна уу",
                  required: true
                }
              ],
              initialValue: packag.name
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Үнэ">
            {getFieldDecorator("price", {
              rules: [
                {
                  message: "Үнэ оруулна уу",
                  required: true
                }
              ],
              initialValue: packag.price
            })(<InputNumber style={{ width: "100%" }} />)}
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
                  message: "Урамшуулал зарлах контентуудыг соногоно уу",
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
          <Form.Item label="Урамшуулал эхлэх дуусах огноо">
            {getFieldDecorator("date_range", {
              rules: [
                {
                  message: "Огноо соногоно уу",
                  required: true
                }
              ],
              initialValue: [
                moment(packag.start_date, dateFormat),
                moment(packag.expired_at, dateFormat)
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
            ],
            initialValue: moment(packag.start_date, dateFormat)
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
              ],
              initialValue: moment(packag.expired_at, dateFormat)
            })(<DatePicker
            disabledDate={disabledDate}
            style={{ width: "100%" }} />)}
          </Form.Item> */}
        </Form>
      </Modal>
    );
  }
  return null;
};

export default Form.create<IProps>()(UpdatePackage);
