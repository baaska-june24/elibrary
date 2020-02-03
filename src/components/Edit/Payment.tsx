import * as React from "react";
import { useState } from "react";
import { Form, Select, Input, Alert } from "antd";
import { FormComponentProps } from "antd/lib/form";
const FormItem = Form.Item;
const Option = Select.Option;

interface IProps extends FormComponentProps {
  content: any;
}

const Payment = (props: IProps) => {
  const { getFieldDecorator } = props.form;
  const [payment, setPayment] = useState("");

  return (
    <>
      <FormItem label="Контентын төлбөр">
        {getFieldDecorator("payment_type", {
          rules: [
            { required: true, message: "Контентын төлбөрийн төрөл сонгоно уу" }
          ]
        })(
          <Select
            placeholder="Төрөл сонгоно уу"
            className="select-form"
            allowClear
            onChange={(e: any) => setPayment(e)}
          >
            <Option value="cash">Үнэтэй</Option>
            <Option value="free">Үнэгүй</Option>
            <Option value="membership">Гишүүнчлэл</Option>
          </Select>
        )}
      </FormItem>
      {payment === "cash" && (
        <>
          <Alert
            message="Бид таны орлогыг дараах байдлаар тооцож байгаа болно. Хэрэв 10000₮
            контент зарагдсан гэж үзвэл (10000-(10000*0.01))/1.1 = 9000 энэ бол
            Qpay үйлчилгээний шимтгэл 1% болон НӨАТ-н 10% хассан цэвэр орлого
            юм. Үүнээс ESAN системийн шимтгэл 30% (2700₮) нийлүүлэгчийн орлого
            70% (6300₮) болно."
            type="error"
          />

          <FormItem label="Контентын үнэ">
            {getFieldDecorator("price", {
              rules: [{ required: true, message: "Контентын үнэ оруулна уу" }]
            })(<Input />)}
          </FormItem>
        </>
      )}
    </>
  );
};

export default Payment;
