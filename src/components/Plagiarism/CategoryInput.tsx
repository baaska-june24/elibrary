import * as React from "react";
import { Select } from "antd";

const { Option } = Select;

const CategoryInput = (props: any) => {
  const handleChange = (value: any) => {
    props.changeCategory(value);
  };

  return (
    <Select
      style={{ width: 180 }}
      onChange={handleChange}
      placeholder="Категори"
      defaultValue="social"
    >
      <Option value="science">Шинжлэх Ухаан</Option>
      <Option value="art">Урлаг</Option>
      <Option value="social">Нийгэм</Option>
      <Option value="literature">Уран зохиол</Option>
      <Option value="medical">Эрүүл мэнд</Option>
      <Option value="engineering">Инженер</Option>
      <Option value="other">Бусад</Option>
    </Select>
  );
};

export default CategoryInput;
