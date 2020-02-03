import Auth from "@aws-amplify/auth";
import { Button, Form, Icon, Input, message } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { useRouter } from "next/router";
import * as React from "react";
import { compose } from "recompose";

const FormItem = Form.Item;
interface IProps extends FormComponentProps {
  location: any;
}

const ConfirmForm = (props: IProps) => {
  const router = useRouter();
  const {
    form: { getFieldDecorator }
  } = props;
  const { username } = router.query;

  const handleCode = (e: React.FormEvent) => {
    e.preventDefault();
    props.form.validateFields(async (error, values) => {
      if (error) {
        throw error;
      }

      Auth.confirmSignUp(username as string, values.code, {
        // Optional. Force user confirmation irrespective of existing alias. By default set to True.
        forceAliasCreation: true
      })
        .then(() => {
          router.push("/auth/signin");
        })
        .catch(err => {
          if (err.code === "CodeMismatchException") {
            message.error("Баталгаажуулах код буруу байна !");
          } else if (err.code === "ExpiredCodeException") {
            message.error("Баталгаажуулах хугацаа дууссан байна !");
          } else message.error("Баталгаажуулах кодоо шалгана уу !");
        });
    });
  };

  return (
    <Form className="auth-tab" onSubmit={handleCode}>
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
            size="large"
            addonBefore={<Icon type="unlock" />}
            placeholder="Баталгаажуулах код"
          />
        )}
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit" block>
          Илгээх
        </Button>
      </FormItem>
    </Form>
  );
};

export default compose<IProps, any>(Form.create())(ConfirmForm);
