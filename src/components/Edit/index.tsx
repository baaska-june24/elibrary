import * as React from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/react-hooks";
import { Row, Col, Card, Form, message, Spin } from "antd";
import { uniq } from "lodash";
import FormItem from "antd/lib/form/FormItem";
import { FormComponentProps } from "antd/lib/form";
import TypeForm from "~/components/Edit/TypeForm";
import OrgForm from "~/components/Edit/OrganizationForm";
import InfoForm from "~/components/Edit/InformationFrom";
import TagForm from "~/components/Edit/TagForm";
import Button from "~/components/Button";
import UserContext from "~/context";
import {
  EDIT_UPDATE_CONTENT,
  UPSERT_CONTENTS_AUTHORS,
  UPSERT_CONTENTS_TAGS,
  UPDATE_CONTENTS_ORGANIZATIONS
} from "~/queries/contents.graphql";
import {
  Edit_Update_ContentMutation,
  Edit_Update_ContentMutationVariables,
  Upsert_Contents_AuthorsMutation,
  Upsert_Contents_AuthorsMutationVariables,
  Upsert_Contents_TagsMutation,
  Upsert_Contents_TagsMutationVariables,
  Get_Single_ContentQuery,
  Update_Contents_OrganizationsMutation,
  Update_Contents_OrganizationsMutationVariables
} from "~/generated/graphql";
import "./style.less";

interface IProps extends FormComponentProps {
  content: Get_Single_ContentQuery["content"];
}

const update = ({ form, content }: IProps) => {
  const router = useRouter();

  const [user] = React.useContext(UserContext);
  const [complete, setComplete] = React.useState(false);

  const [updateContentAction] = useMutation<
    Edit_Update_ContentMutation,
    Edit_Update_ContentMutationVariables
  >(EDIT_UPDATE_CONTENT);

  const [upsertContentAuthors] = useMutation<
    Upsert_Contents_AuthorsMutation,
    Upsert_Contents_AuthorsMutationVariables
  >(UPSERT_CONTENTS_AUTHORS);

  const [upsertContentTags] = useMutation<
    Upsert_Contents_TagsMutation,
    Upsert_Contents_TagsMutationVariables
  >(UPSERT_CONTENTS_TAGS);

  const [updateContentsOrganization] = useMutation<
    Update_Contents_OrganizationsMutation,
    Update_Contents_OrganizationsMutationVariables
  >(UPDATE_CONTENTS_ORGANIZATIONS);

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
        const role =
          user &&
          user.roles_connection.length > 0 &&
          user.roles_connection[0].role.name;
        await Promise.all([
          updateContentAction({
            context: {
              headers: {
                "X-Hasura-Role": role
              }
            },
            variables: {
              where: {
                id: {
                  _eq: content.id
                }
              },
              set: {
                name: values.name,
                description: values.description,
                type: values.type,
                isbn: values.isbn
              },
              meta_update: {
                frequency: values.frequency,
                keyword: values.keyword,
                number: values.number,
                publishedAt: values.publishedAt,
                samplePage: values.samplePage || "1-6"
              }
            }
          }),
          upsertContentAuthors({
            context: {
              headers: {
                "X-Hasura-Role": role
              }
            },
            variables: {
              objects: values.author.map((id: any) => ({
                author_id: id,
                content_id: content.id
              }))
            }
          }),
          upsertContentTags({
            context: {
              headers: {
                "X-Hasura-Role": role
              }
            },
            variables: {
              objects: values.tags
                .reduce((a: any, b: any) => uniq([...a, ...b]), [])
                .map((id: any) => ({ tag_id: id, content_id: content.id }))
            }
          }),
          updateContentsOrganization({
            context: {
              headers: {
                "X-Hasura-Role": role
              }
            },
            variables: {
              where: {
                content_id: {
                  _eq: content.id
                },
                organization_id: {
                  _eq: content.organizations[0].organization_id
                }
              },
              newOrganizationId: values.organization
            }
          })
        ]);

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
    <div className="edit-container">
      <Form onSubmit={e => handleSubmit(e)}>
        <Spin spinning={complete} tip={"Хадгалж байна..."}>
          <Row gutter={24}>
            <Col md={24}>
              <Card className="form-card">
                <OrgForm form={form} content={content} />
                <TypeForm form={form} content={content} />
                <InfoForm form={form} content={content} />
                <TagForm form={form} content={content} />
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

export default Form.create<IProps>()(update);
