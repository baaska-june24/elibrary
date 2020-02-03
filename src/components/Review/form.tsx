import * as React from "react";
import { useContext } from "react";
import { Form, Rate, Row, Col, Input, Alert, Avatar } from "antd";
// import Avatar from "~/components/Avatar";

import Button from "~/components/Button";
import { FormComponentProps } from "antd/lib/form";
import UserContext from "~/context";
import { getImageUrl, canLoadWebp } from "~/utils/helpers";

const { TextArea } = Input;

interface IProps extends FormComponentProps {
  onSubmit: (rate: number, comment: string) => void;
}

const ReviewForm = (props: IProps) => {
  const {
    form: { getFieldDecorator }
  } = props;

  const [user]= useContext(UserContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    props.form.validateFields(async (error, values) => {
      if (error) {
        throw error;
      }

      props.onSubmit(values.rate, values.comment);
      props.form.resetFields();
    });
  };

  if (user) {
    const avatarFile: any =
      (user.files_connection &&
        user.files_connection.length > 0 &&
        user.files_connection[0]) ||
      null;

    let avatarUrl = null;

    if (avatarFile && avatarFile.file) {
      const imageRequest = JSON.stringify({
        bucket: avatarFile.file.bucket,
        edits: {
          resize: {
            fit: "contain",
            height: 100,
            width: 100
          },
          [canLoadWebp ? "webp" : "jpeg"]: {
            quality: 80
          }
        },
        key: avatarFile.file_avatar
      });
      avatarUrl = getImageUrl(imageRequest);
    }

    return (
      <div className="review-form-wrapper">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={12}>
              <Avatar
                shape="square"
                src={avatarUrl}
                icon={avatarUrl ? null : "user"}
                size={60}
              />
              <strong style={{ marginLeft: "10px" }}>{user.firstname}</strong>
            </Col>
            <Col md={12} style={{ textAlign: "right" }}>
              <Form.Item label="Үнэлгээ сонгоно уу" className="form-item-rate">
                {getFieldDecorator("rate", {
                  initialValue: 5
                })(<Rate />)}
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            {getFieldDecorator("comment")(
              <TextArea
                rows={4}
                placeholder="Бүтээлийн тухай сэтгэгдлээ бичнэ үү"
                style={{ marginTop: "30px" }}
              />
            )}
          </Form.Item>
          <div style={{ textAlign: "right" }}>
            <Button type="primary" icon="check" htmlType="submit">
              Илгээх
            </Button>
          </div>
        </Form>
      </div>
    );
  }

  return (
    <Alert
      message="Нэвтэрсэн хэрэглэгч үнэлгээ өгөх боломжтой!"
      type="warning"
    />
  );
};

export default Form.create<IProps>()(ReviewForm);
