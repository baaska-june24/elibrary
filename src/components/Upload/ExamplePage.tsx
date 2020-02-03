import * as React from "react";
import { FormComponentProps } from "antd/lib/form";
import "./style.less";
import { Form, Input, Alert } from "antd";

const FormItem = Form.Item;
interface IProps extends FormComponentProps {}

const Pages = (props: IProps) => {
  return (
    <>
      <FormItem label="Жишээ хуудас">
        {props.form.getFieldDecorator("examplePage")(
          <Input placeholder="1-5,8,11-13 гэх мэтээр жишээ хуудсыг үүсгэх боломжтой" />
        )}
      </FormItem>
    </>
  );
};

export default Pages;
