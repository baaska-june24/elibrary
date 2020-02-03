// tslint:disable: no-implicit-dependencies no-submodule-imports
import * as React from "react";
import { Form, Icon, Input, Button, message } from "antd";
import { FormComponentProps } from "antd/lib/form";
import Auth from "@aws-amplify/auth";
import { useState } from "react";
import { useRouter } from "next/router";

const FormItem = Form.Item;
const { Password } = Input;

interface IProps extends FormComponentProps {
  location: any;
}

const RecoverForm = (props: IProps) => {
  const router = useRouter();
  const {
    form: { getFieldDecorator }
  } = props;

  const [isConfirmDirty, setConfirmDirty] = useState(false);
  const { username } = router.query;

  const handleRecover = (e: React.FormEvent) => {
    e.preventDefault();
    props.form.validateFields(async (error, values) => {
      if (error) {
        throw error;
      }

      Auth.forgotPasswordSubmit(
        username as string,
        values.code,
        values.new_password
      )
        .then(() => {
          router.push("/auth/signin");
        })
        .catch(err => {
          if (err.code === "InvalidPasswordException") {
            message.error(
              "Нууц үгэнд том үсэг, тоо орсон байх ёстой ба нууц үг 6-с дээш тэмдэгт байна !",
              7
            );
          } else if (err.code === "InvalidParameterException") {
            message.error(
              "Нууц үгэнд том үсэг, тоо орсон байх ёстой ба нууц үг 6-с дээш тэмдэгт байна !",
              7
            );
          } else if (err.code === "TooManyRequestsException") {
            message.error(
              "Туршилтын хязгаар хэтэрсэн байна, хэсэг хугацааны дараа дахин оролдоно уу",
              7
            );
          } else if (err.code === "CodeMismatchException") {
            message.error("Баталгаажуулах код буруу байна !");
          } else if (err.code === "LimitExceededException") {
            message.error(
              "Та нууц үгээ олон удаа шаардлага хангахгүй хийсэн тул түр хүлээгээд дахин оролдоно уу.",
              7
            );
          } else message.error("Алдаа гарлаа !");
        });
    });
  };

  const handleConfirmBlur = (e: React.FormEvent) => {
    e.preventDefault();
    props.form.validateFields(async (error, values) => {
      if (error) {
        throw error;
      }

      setConfirmDirty(isConfirmDirty || !!values.passwordConfirm);
    });
  };

  const compareToFirstPassword = (_: any, value: any, callback: any) => {
    if (value && value !== props.form.getFieldValue("new_password")) {
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
    <Form className="auth-tab" onSubmit={handleRecover}>
      <FormItem>
        {getFieldDecorator("code", {
          rules: [
            {
              message: "Баталгаажуулах код оруулна уу",
              required: true
            }
          ]
        })(
          <Input
            addonBefore={<Icon type="code" />}
            placeholder="Баталгаажуулах код"
          />
        )}
      </FormItem>
      <FormItem hasFeedback>
        {getFieldDecorator("new_password", {
          rules: [
            {
              message: "Нууц үг оруулна уу",
              required: true
            },
            {
              validator: validateToNextPassword
            }
          ]
        })(
          <Password
            addonBefore={<Icon type="unlock" />}
            placeholder="Шинэ нууц үг"
            onBlur={handleConfirmBlur}
          />
        )}
      </FormItem>
      <FormItem hasFeedback>
        {getFieldDecorator("passwordConfirm", {
          rules: [
            {
              message: "Нууц үгээ давтан оруулна уу",
              required: true
            },
            {
              validator: compareToFirstPassword
            }
          ]
        })(
          <Password
            addonBefore={<Icon type="unlock" />}
            placeholder="Шинэ нууц үгээ давтан оруулна уу"
            onBlur={handleConfirmBlur}
          />
        )}
      </FormItem>
      <Button type="primary" htmlType="submit" block>
        Илгээх
      </Button>
    </Form>
  );
};

export default Form.create<IProps>()(RecoverForm);
