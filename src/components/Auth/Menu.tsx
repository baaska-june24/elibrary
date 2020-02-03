import { Icon, Menu } from "antd";
import Link from "next/link";
import * as React from "react";

interface IProps {
  active: "login" | "register";
}
const AuthMenu = ({ active }: IProps) => (
  <Menu
    mode="horizontal"
    selectedKeys={[active]}
    style={{ textAlign: "center", marginBottom: "1rem" }}
  >
    <Menu.Item key="login">
      <Link href="/auth/signin">
        <a>
          <Icon type="user" />
          Нэвтрэх
        </a>
      </Link>
    </Menu.Item>
    <Menu.Item key="register">
      <Link href="/auth/signup">
        <a>
          <Icon type="unlock" />
          Бүртгүүлэх
        </a>
      </Link>
    </Menu.Item>
  </Menu>
);

export default AuthMenu;
