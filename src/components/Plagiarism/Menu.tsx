import * as React from "react";
import { Menu } from "antd";

const PlagiarismMenu = (props: any) => {
  return (
    <Menu
      defaultSelectedKeys={["text"]}
      mode="horizontal"
      className="g-menu"
      {...props}
    >
      <Menu.Item key="text">Текстээс хуулбар шалгах</Menu.Item>
      <Menu.Item key="file">Файлаас хуулбар шалгах</Menu.Item>
      <Menu.Item key="history">Шалгуурын түүх</Menu.Item>
    </Menu>
  );
};

export default PlagiarismMenu;
