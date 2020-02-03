import * as React from "react";
import {
  Form,
  Input,
  Row,
  Col,
  Button,
  message,
  Card,
  DatePicker,
  Radio
} from "antd";
import { FormComponentProps } from "antd/lib/form";
import { useMutation } from "@apollo/react-hooks";
import { useContext } from "react";
import Container from "~/components/Container";
import AvatarUpload from "./avatar";
import UserContext from "~/context";
import { UPDATE_USER } from "~/queries/users.graphql";
import {
  Update_UserMutation,
  Update_UserMutationVariables
} from "~/generated/graphql";
import "./style.less";
import SideMenu from "./SideMenu";
import moment from "moment";
import { useRouter } from "next/router";

const FormItem = Form.Item;

interface IProps extends FormComponentProps {}

const MyProfile = (props: IProps) => {
  const { getFieldDecorator } = props.form;
  const router = useRouter();
  const [UpdateUserAction] = useMutation<
    Update_UserMutation,
    Update_UserMutationVariables
  >(UPDATE_USER);
  const [user] = useContext(UserContext);

  const formItemLayout = {
    labelCol: {
      sm: { span: 8 },
      xs: { span: 24 }
    },
    wrapperCol: {
      sm: { span: 16 },
      xs: { span: 24 }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      props.form.validateFields(async (error, values) => {
        if (error) {
          throw error;
        }
        UpdateUserAction({
          variables: {
            set: {
              birthdate: values.birthdate,
              firstname: values.firstname,
              gender: values.gender,
              lastname: values.lastname,
              phone: values.phone
            },
            where: {
              id: {
                _eq: user && user.id
              }
            }
          }
        });
        message.success("Амжилттай хадгаллаа !");
        window.location.assign("/");
      });
    } catch (error) {
      message.error(error);
    }
  };

  if (user) {
    return (
      <Container>
        <Row type="flex" gutter={10}>
          <Col md={6} sm={24}>
            <SideMenu />
          </Col>
          <Col md={10} sm={24} xs={24}>
            <h3 style={{ margin: "10px" }}>Ерөнхий мэдээлэл</h3>
            <Card
              style={{
                border: "1px dashed",
                borderColor: "#D8D8D8",
                borderRadius: "5px",
                margin: "10px",
                minHeight: "400px",
                width: "100%"
              }}
            >
              <Form
                className="profile-form"
                onSubmit={e => handleSubmit(e)}
                {...formItemLayout}
              >
                <FormItem label="Эцэг/эх-ийн нэр">
                  {getFieldDecorator("lastname", {
                    rules: [
                      {
                        message: "Эцэг/эх-ийн нэрээ оруулна уу",
                        required: true
                      }
                    ],
                    initialValue: user.lastname
                  })(<Input placeholder="Эцэг/эх-ийн нэр" />)}
                </FormItem>
                <FormItem label="Нэр">
                  {getFieldDecorator("firstname", {
                    initialValue: user.firstname,
                    rules: [{ required: true, message: "Нэрээ оруулна уу" }]
                  })(<Input placeholder="Нэр" />)}
                </FormItem>
                <FormItem label="Утасны дугаар">
                  {getFieldDecorator("phone", {
                    initialValue: user.phone,
                    rules: [
                      {
                        required: true,
                        message: "Утасны дугаараа оруулна уу"
                      }
                    ]
                  })(<Input type="number" placeholder="Утасны дугаар" />)}
                </FormItem>
                <FormItem label="Төрсөн огноо">
                  {getFieldDecorator("birthdate", {
                    rules: [
                      { required: true, message: "Төрсөн огноо оруулна уу" }
                    ],
                    initialValue: user.birthdate
                      ? moment(user && user.birthdate, "YYYY-MM-DD").utc(
                          user && user.birthdate
                        )
                      : moment.utc("2019-01-01", "YYYY-MM-DD")
                  })(<DatePicker placeholder="YYYY-MM-DD" />)}
                </FormItem>
                <FormItem label="Хүйс">
                  {getFieldDecorator("gender", {
                    initialValue: user.gender
                  })(
                    <Radio.Group>
                      <Radio.Button value="M">Эрэгтэй</Radio.Button>
                      <Radio.Button value="F">Эмэгтэй</Radio.Button>
                    </Radio.Group>
                  )}
                </FormItem>
                <Button
                  shape="round"
                  icon="cloud-upload"
                  htmlType="submit"
                  size="small"
                >
                  Хадгалах
                </Button>
              </Form>
            </Card>
          </Col>
          <Col md={8} sm={24} xs={24}>
            <Card
              style={{
                border: "1px dashed",
                borderColor: "#D8D8D8",
                borderRadius: "5px",
                margin: "10px",
                marginTop: "45px",
                minHeight: "400px",
                width: "100%"
              }}
            >
              <div className="avatar">
                <AvatarUpload id={user.id} />
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return null;
  }
};

export default Form.create()(MyProfile);
