import * as React from "react";
import { Row, Col, message, Button, Form, Input } from "antd";
import { useMutation } from "@apollo/react-hooks";
import {
  Update_AuthorMutation,
  Update_AuthorMutationVariables
} from "~/generated/graphql";
import { UPDATE_AUTHOR } from "~/queries/authors.graphql";
import { FormComponentProps } from "antd/lib/form";

interface IProps extends FormComponentProps {
  author: any;
}

const { TextArea } = Input;

const EditForm = (props: IProps) => {
  const [UpdateAuthorAction] = useMutation<
    Update_AuthorMutation,
    Update_AuthorMutationVariables
  >(UPDATE_AUTHOR);

  const {
    author,
    form: { getFieldDecorator }
  } = props;

  const UpdateAuthor = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      props.form.validateFields(async (error: any, values: any) => {
        if (error) {
          throw error;
        }
        await UpdateAuthorAction({
          variables: {
            set: {
              description: values.description,
              firstname: values.firstname,
              lastname: values.lastname
            },
            where: { id: { _eq: author.id } }
          }
        });
        message.success("Амжилттай");
      });
    } catch (error) {
      message.error(error);
    }
  };

  return (
    <Form onSubmit={e => UpdateAuthor(e)}>
      <Row type="flex" gutter={15}>
        <Col md={24} xs={24}>
          <Form.Item>
            {getFieldDecorator("firstname", {
              initialValue: author.firstname,
              rules: [
                {
                  message: "Please input the name !",
                  required: true
                }
              ]
            })(
              <Input
                style={{
                  background: "transparent",
                  border: "none",
                  color: "black",
                  fontSize: "14px"
                }}
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("lastname", {
              initialValue: author.lastname,
              rules: [
                {
                  message: "Please input the name !",
                  required: true
                }
              ]
            })(
              <Input
                style={{
                  background: "transparent",
                  border: "none",
                  color: "black",
                  fontSize: "14px"
                }}
              />
            )}
          </Form.Item>
          <Form.Item style={{ marginTop: "-30px" }}>
            {getFieldDecorator("description", {
              initialValue: author.description,
              rules: [
                {
                  message: "Please input the description !",
                  required: true
                }
              ]
            })(
              <TextArea
                style={{
                  background: "transparent",
                  border: "none",
                  color: "black",
                  fontSize: "14px",
                  height: "150px"
                }}
                autosize={{ minRows: 2, maxRows: 6 }}
              />
            )}
          </Form.Item>
        </Col>
        <Col md={24} sm={24} xs={24}>
          <div style={{ textAlign: "right" }}>
            <Button
              type="primary"
              shape="round"
              icon="check"
              htmlType="submit"
              size="small"
            >
              Save
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default Form.create<IProps>()(EditForm);
