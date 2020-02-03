import * as React from "react";
import { Modal, Input, Form, message } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { SEND_EMAIL } from "~/queries/worker.graphql";
import { useMutation } from "@apollo/react-hooks";
import { generateCustomToken } from "~/utils/token";
import { useRouter } from "next/router";
import {
  Send_EmailMutation,
  Send_EmailMutationVariables,
  Emails_Insert_Input
} from "~/generated/graphql";
import { useContext } from "react";
import UserContext from "~/context";
interface IProps extends FormComponentProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  organization: any;  
}
const InviteModal = (props: IProps) => {
  const { getFieldDecorator } = props.form;
  const url= window.location.origin;  
  
  const [user]= useContext(UserContext);
  const router = useRouter();
  const [InviteWorkerAction] = useMutation<
    Send_EmailMutation,
    Send_EmailMutationVariables
  >(SEND_EMAIL);
  const Invite = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      props.form.validateFields(async (error, values) => {
        if (error) {
          throw error;
        }
        const workerToken = await generateCustomToken({
          organization: props.organization.id,
          email: values.InviteEmail
        });
        const Link = `${url}/worker?token=${workerToken}`;
        

        const data: Emails_Insert_Input = {
          body: {
            title: "Сайн байна уу",
            description: `Таныг ESAN цахим номын санд ${props.organization.name} байгууллага ажилтнаар урьсан байна. та доорх холбоос дээр дарж баталгаажуулна уу `,
            code: ` Та <a href="${Link}">ЭНД ДАРЖ</a> баталгаажуулна уу`
          },
          template: "esan_email",
          to_email: values.InviteEmail
        };

        debugger;
        InviteWorkerAction({
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

        props.setVisible(false);
        message.success("Амжилттай илгээгдлээ");
      });
    } catch (error) {
      message.error(error);
    }
  };

  return (
    <Modal
      title="Ажилтан урих"
      visible={props.visible}
      onOk={Invite}
      onCancel={() => props.setVisible(false)}
      okText="Урих"
       cancelText="Цуцлах"
    >
      <Form>
        <Form.Item label="Email">
          {getFieldDecorator("InviteEmail", {
            rules: [
              {
                message: "Имэйл хаяг оруулна уу",
                required: true
              }
            ]
          })(<Input />)}
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Form.create<IProps>()(InviteModal);
