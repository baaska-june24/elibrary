import * as React from "react";
import { useState } from "react";
import Auth from "@aws-amplify/auth";
import { useRouter } from "next/router";
import { Form, Input, Button, Alert, message, Card, Row, Col } from "antd";
import { FormComponentProps } from "antd/lib/form";
import "./style.less";
import Container from "~/components/Container";
import SideMenu from "./SideMenu";

const FormItem = Form.Item;

interface IProps extends FormComponentProps {}

const PasswordForm = (props: IProps) => {
  const router = useRouter();
  const { getFieldDecorator } = props.form;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    props.form.validateFields(async (error, values) => {
      if (error) {
        throw error;
      }

      Auth.currentAuthenticatedUser()
        .then(user => {
          return Auth.changePassword(
            user,
            values.oldPassword,
            values.newPassword
          );
        })
        .then(() => {
          message.success("Амжилттай солигдлоо");
          router.push("/");
        })
        .catch(err => {
          if (err.code === "InvalidParameterException") {
            message.error(
              "Нууц үгэнд том, жижиг үсэг, тоо орсон байх ёстой ба нууц үг 6-с дээш тэмдэгт байна !",
              7
            );
          } else if (err.code === "InvalidPasswordException") {
            message.error(
              "Нууц үгэнд том, жижиг үсэг, тоо орсон байх ёстой ба нууц үг 6-с дээш тэмдэгт байна !",
              7
            );
          } else if (err.code === "NotAuthorizedException") {
            message.error("Хуучин нууц үг буруу байна.");
          }
          console.log(err.code);
        });
    });
  };

  const [isConfirmDirty, setConfirmDirty] = useState(false);

  const handleConfirmBlur = (e: React.FormEvent) => {
    e.preventDefault();
    props.form.validateFields(async (error, values) => {
      if (error) {
        throw error;
      }

      setConfirmDirty(isConfirmDirty || !!values.confirm);
    });
  };

  const compareToFirstPassword = (_: any, value: any, callback: any) => {
    if (value && value !== props.form.getFieldValue("newPassword")) {
      callback("Нууц үг тохирохгүй байна");
    } else {
      callback();
    }
  };

  const validateToNextPassword = (_: any, value: any, callback: any) => {
    if (value && isConfirmDirty) {
      props.form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  return (
    <Container>
      <Row gutter={32}>
        <Col md={6}>
          <SideMenu />
        </Col>
        <Col md={18}>
          <Card
            title={<h3>Нууц үг солих</h3>}
            style={{
              border: "1px dashed",
              borderColor: "#D8D8D8",
              borderRadius: "5px",
              margin: "1rem auto",
              maxWidth: 380,
              width: "90%"
            }}
          >
            <Form
              className="profile-form"
              onSubmit={e => handleSubmit(e)}
              layout="vertical"
            >
              <FormItem label="Хуучин нууц үг">
                {getFieldDecorator("oldPassword", {
                  rules: [
                    { required: true, message: "Хуучин нууц үгээ оруулна уу" }
                  ]
                })(<Input.Password placeholder="Хуучин нууц үг оруулна уу" />)}
              </FormItem>
              <FormItem label="Шинэ нууц үг">
                {getFieldDecorator("newPassword", {
                  rules: [
                    { required: true, message: "Шинэ нууц үгээ оруулна уу" },
                    {
                      validator: validateToNextPassword
                    }
                  ]
                })(<Input.Password placeholder="Шинэ нууц үг оруулна уу" />)}
              </FormItem>
              <FormItem label="Шинэ нууц үг давтах">
                {getFieldDecorator("confirm", {
                  rules: [
                    {
                      message: "Шинэ нууц үгээ давтан оруулна уу",
                      required: true
                    },
                    {
                      validator: compareToFirstPassword
                    }
                  ]
                })(
                  <Input.Password
                    onBlur={e => handleConfirmBlur(e)}
                    placeholder="Шинэ нууц үгээ давтан оруулна уу"
                  />
                )}
              </FormItem>
              <Alert
                message="Анхааруулга"
                description="Шинээр солих нууц үг хуучин нууц үгтэй адилхан байж болохгүйг анхаарна уу."
                type="info"
                showIcon
                className="infopassword"
              />
              <Button
                shape="round"
                type="primary"
                htmlType="submit"
                style={{ marginTop: "20px" }}
              >
                Хадгалах
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Form.create<IProps>()(PasswordForm);
