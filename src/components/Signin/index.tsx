import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Auth from "@aws-amplify/auth";
import { Form, Row, Col, Icon, Input, message } from "antd";
import { FormComponentProps } from "antd/lib/form";
import Button from "~/components/Button";
import "./style.less";

const FormItem = Form.Item;

interface IProps extends FormComponentProps {}

const SignIn = (props: IProps) => {
  const router = useRouter();
  const [isForgotPassword, setForgotPassword] = useState(false);
  const {
    form: { getFieldDecorator }
  } = props;

  const login = (e: React.FormEvent) => {
    e.preventDefault();

    props.form.validateFields(async (error, values) => {
      if (error) {
        throw error;
      }

      try {
        const user = await Auth.signIn({
          password: values.password,
          username: values.username.toLowerCase()
        });

        if (
          user.challengeName === "SMS_MFA" ||
          user.challengeName === "SOFTWARE_TOKEN_MFA"
        ) {
          // You need to get the code from the UI inputs
          // and then trigger the following function with a button click
          // const code = getCodeFromUserInput();
          // // If MFA is enabled, sign-in should be confirmed with the confirmation code
          // const loggedUser = await Auth.confirmSignIn(
          //     user,   // Return object from Auth.signIn()
          //     code,   // Confirmation code
          //     mfaType // MFA Type e.g. SMS_MFA, SOFTWARE_TOKEN_MFA
          // );
        } else if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
          // const { requiredAttributes } = user.challengeParam; // the array of required attributes, e.g ['email', 'phone_number']
          // You need to get the new password and required attributes from the UI inputs
          // and then trigger the following function with a button click
          // For example, the email and phone_number are required attributes
          // const { username, email, phone_number } = getInfoFromUserInput();
          // const loggedUser = await Auth.completeNewPassword(
          //   user, // the Cognito User Object
          //   newPassword, // the new password
          //   // OPTIONAL, the required attributes
          //   {
          //     email,
          //     phone_number
          //   }
          // );
        } else if (user.challengeName === "MFA_SETUP") {
          // This happens when the MFA method is TOTP
          // The user needs to setup the TOTP before using it
          // More info please check the Enabling MFA part
          // Auth.setupTOTP(user);
        } else {
          // The user directly signs in
          // console.log(user);
        }
        router.replace(
          (router.query && (router.query.redirectUrl as string)) || "/"
        );
      } catch (err) {
        if (err.code === "UserNotConfirmedException") {
          // The error happens if the user didn't finish the confirmation step when signing up
          // In this case you need to resend the code and confirm the user
          await Auth.resendSignUp(values.username.toLowerCase());
          const url = `/auth/confirm?username=${values.username.toLowerCase()}`;
          router.push(url);
        } else if (err.code === "PasswordResetRequiredException") {
          // The error happens when the password is reset in the Cognito console
          // In this case you need to call forgotPassword to reset the password
          await Auth.forgotPassword(values.username.toLowerCase());
          const url = `/auth/recover?username=${values.username.toLowerCase()}`;
          router.push(url);
        } else if (err.code === "NotAuthorizedException") {
          message.error("Имэйл аль эсвэл нууц үг буруу байна.");
        } else if (err.code === "UserNotFoundException") {
          message.error("Хэрэглэгч олдсонгүй !");
        } else if (err.code === "TooManyRequestsException") {
          message.error(
            "Туршилтын хязгаар хэтэрсэн байна, хэсэг хугацааны дараа дахин оролдоно уу"
          );
        } else if (err.code === "ResourceNotFoundException") {
          message.error("Имэйл хаяг буруу эсвэл бүртгэлгүй байна.");
        } else {
          message.error(err.message || err);
        }
      }
    });
  };

  const handleForgot = (e: React.FormEvent) => {
    e.preventDefault();
    props.form.validateFields(async (error, values) => {
      if (error) {
        throw error;
      }
      Auth.forgotPassword(values.username.toLowerCase())
        .then(() => {
          const url = `/auth/recover?username=${values.username.toLowerCase()}`;
          router.push(url);
        })
        .catch(err => {
          if (err.code === "TooManyRequestsException") {
            message.error(
              "Туршилтын хязгаар хэтэрсэн байна, хэсэг хугацааны дараа дахин оролдоно уу"
            );
          } else if (err.code === "ResourceNotFoundException") {
            message.error("Имэйл хаяг буруу эсвэл бүртгэлгүй байна.");
          } else if (err.code === "UserNotFoundException") {
            message.error("Хэрэглэгч олдсонгүй");
          } else if (err.code === "LimitExceededException") {
            message.error("Түр хүлээгээд дахин оролдоно уу.");
          } else message.error(err.message);
        });
    });
  };

  const ForgotForm = () => {
    return (
      <Form className="auth-tab" onSubmit={e => handleForgot(e)}>
        <FormItem>
          {getFieldDecorator("username", {
            rules: [
              {
                message: "Email хаягаа оруулна уу",
                required: true
              }
            ]
          })(<Input addonBefore={<Icon type="mail" />} placeholder="Email" />)}
        </FormItem>
        <Row>
          <Col md={12}>
            <Button
              onClick={() => setForgotPassword(false)}
              type="link"
              size="small"
            >
              Буцах
            </Button>
          </Col>
          <Col md={12}>
            <Button type="primary" htmlType="submit" block>
              Илгээх
            </Button>
          </Col>
        </Row>
      </Form>
    );
  };

  const LoginForm = () => {
    return (
      <Row>
        <Col>
          <Form className="auth-tab" onSubmit={e => login(e)}>
            <FormItem>
              {getFieldDecorator("username", {
                rules: [
                  {
                    message: "Имэйл хаягаа оруулна уу",
                    required: true
                  }
                ]
              })(
                <Input addonBefore={<Icon type="mail" />} placeholder="Имэйл" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("password", {
                rules: [
                  {
                    message: "Нууц үг оруулна уу",
                    required: true
                  }
                ]
              })(
                <Input.Password
                  type="password"
                  addonBefore={<Icon type="unlock" />}
                  placeholder="Нууц үг"
                />
              )}
            </FormItem>
            <Row>
              <Col md={12}>
                <Button
                  onClick={() => setForgotPassword(true)}
                  type="link"
                  size="small"
                >
                  Нууц үгээ мартсан
                </Button>
              </Col>
              <Col md={12}>
                <Button type="primary" htmlType="submit" block>
                  Нэвтрэх
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    );
  };

  return isForgotPassword ? ForgotForm() : LoginForm();
};

export default Form.create()(SignIn);
