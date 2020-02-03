import * as React from "react";
import { Form, Select } from "antd";
import { filterOption } from "~/utils/helpers";
import { FormComponentProps } from "antd/lib/form";
import "./style.less";

const FormItem = Form.Item;
const { Option } = Select;

const Types = [
  {
    id: 1,
    name: "Ном",
    value: "book"
  },
  {
    id: 2,
    name: "Сэтгүүл",
    value: "magazine"
  },

  {
    id: 3,
    name: "Сонин",
    value: "newspaper"
  },
  {
    id: 4,
    name: "Эрдмийн ажил",
    value: "dissertation"
  },
  {
    id: 5,
    name: "Судалгаа, статистик",
    value: "research"
  },
  {
    id: 6,
    name: "Дипломын ажил",
    value: "diploma"
  }
];

interface IProps extends FormComponentProps {
  content: any;
}

const Type = (props: IProps) => {
  const { getFieldDecorator } = props.form;

  return (
    <FormItem label="Төрөл">
      {getFieldDecorator("type", {
        initialValue: props.content && props.content.type,
        rules: [{ required: true, message: "Контентын төрөл сонгоноуу" }]
      })(
        <Select className="select-form" showSearch filterOption={filterOption}>
          {Types.map(({ id, value, name }) => (
            <Option key={id} value={value}>
              {name}
            </Option>
          ))}
        </Select>
      )}
    </FormItem>
  );
};

export default Type;
