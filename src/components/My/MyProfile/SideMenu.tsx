import * as React from "react";
import { Menu, Icon } from "antd";
import Link from "next/link";
import Container from "~/components/Container";

const SideMenu = () => {
  const profile = `/my/profile`;

  return (
    <Container>
      <Menu className="SideMenu" mode="vertical">
        <Menu.Item key={profile}>
          <Link href={profile}>
            <a>
              <Icon type="appstore" />
              <strong>Ерөнхий мэдээлэл</strong>
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key={`${profile}/password`}>
          <Link href={`${profile}/password`}>
            <a>
              <Icon type="star" />
              <strong>Нууц үг солих</strong>
            </a>
          </Link>
        </Menu.Item>
        {/* <Menu.Item key={`${profile}/author`}>
          <Link href={`${profile}/author`}>
            <a><Icon type="user" />
            <strong>Зохиогчийн мэдээлэл</strong></a>
          </Link>
        </Menu.Item> */}
        {/* <Menu.Item key="studentregister">
          <Link href={`/organizations/${id}/register`}>
            <a><Icon type="user" />
            Оюутан бүртгүүлэх</a>
          </Link>
        </Menu.Item> */}
      </Menu>
    </Container>
  );
};

export default SideMenu;
