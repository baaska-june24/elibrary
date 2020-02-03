import * as React from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/react-hooks";
import { Row, Col, Card, Form, message, Spin } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { FormComponentProps } from "antd/lib/form";
import { uniq } from "lodash";

import { CoverUpload, FileUpload } from "~/components/Upload/Upload";
import TypeForm from "~/components/Upload/TypeForm";
import Payment from "~/components/Upload/Payment";
import OrgForm from "~/components/Upload/OrganizationForm";
import InfoForm from "~/components/Upload/InformationFrom";
import TagForm from "~/components/Upload/TagForm";
import ExamplePage from "~/components/Upload/ExamplePage";
import Button from "~/components/Button";
import { useFileUpload } from "~/hooks/useFileUpload";

import UserContext from "~/context";
import { CREATE_CONTENT } from "~/queries/contents.graphql";
import {
  Create_ContentMutation,
  Create_ContentMutationVariables,
  Contents_Insert_Input
} from "~/generated/graphql";
import { IUploadFileType } from "~/utils/helpers";

import "./style.less";

interface IProps extends FormComponentProps {}

const upload = ({ form }: IProps) => {
  const router = useRouter();
  const [uploadFile] = useFileUpload();
  const [user] = React.useContext(UserContext);
  const [complete, setComplete] = React.useState(false);
  const [typeName, setTypeName] = React.useState("");
  const [createContentAction] = useMutation<
    Create_ContentMutation,
    Create_ContentMutationVariables
  >(CREATE_CONTENT);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setComplete(true);
    try {
      if (!user) {
        throw Error("Nevterne uu");
      }

      form.validateFields(async (error, values) => {
        if (error) {
          setComplete(false);
          throw error;
        }
        const [contentFileUpload, coverUpload] = await Promise.all([
          uploadFile(values.content.file, IUploadFileType.content),
          uploadFile(values.cover.file, IUploadFileType.cover)
        ]);

        const data: Contents_Insert_Input = {
          authors_connection: {
            data: values.author.map((id: any) => ({ author_id: id }))
          },
          description: values.description,
          files: {
            data: [
              {
                file: {
                  data: {
                    acl: "private",
                    bucket: contentFileUpload.bucket,
                    filename: contentFileUpload.name,
                    key: contentFileUpload.key
                  }
                },
                type: "file",
                is_active: true
              },
              {
                file: {
                  data: {
                    acl: "public",
                    bucket: coverUpload.bucket,
                    filename: coverUpload.name,
                    key: coverUpload.key
                  }
                },
                type: "cover",
                is_active: true
              }
            ]
          },
          isbn: values.isbn,
          meta: {
            frequency: values.frequency,
            keyword: values.keyword,
            number: values.number,
            publishedAt: values.published_at,
            samplePage: values.examplePage || "1-6"
          },
          name: values.name,
          organizations: {
            data: [{ organization_id: values.organization }]
          },
          prices: {
            data: [
              {
                price: values.price,
                payment_type: values.payment_type,
                is_active: true
              }
            ]
          },
          tags_connection: {
            data: values.tags
              .reduce((a: any, b: any) => uniq([...a, ...b]), [])
              .map((id: any) => ({ tag_id: id }))
          },
          type: values.type
        };

        await createContentAction({
          context: {
            headers: {
              "X-Hasura-Role":
                user &&
                user.roles_connection.length > 0 &&
                user.roles_connection[0].role.name
            }
          },
          variables: {
            data
          }
        });
        setComplete(false);
        await message.success("Амжилттай");
        router.push("/dashboard");
      });
    } catch (error) {
      setComplete(false);
      message.error(error);
    }
  };

  return (
    <div className="upload-container">
      <Form onSubmit={e => handleSubmit(e)}>
        <Spin spinning={complete} tip={"Хадгалж байна..."}>
          <Row gutter={24}>
            <Col md={8}>
              <FileUpload form={form} />
              <CoverUpload form={form} />
              <Payment form={form} />
              <ExamplePage form={form} />
            </Col>
            <Col md={16}>
              <Card className="form-card">
                <OrgForm form={form} />
                <TypeForm setTypeName={setTypeName} form={form} />
                <InfoForm form={form} typeName={typeName} />
                <TagForm form={form} />
                <FormItem>
                  <Button
                    type="primary"
                    block
                    htmlType="submit"
                    loading={complete}
                  >
                    Хадгалах
                  </Button>
                </FormItem>
              </Card>
            </Col>
          </Row>
        </Spin>
      </Form>
    </div>
  );
};

export default Form.create()(upload);
