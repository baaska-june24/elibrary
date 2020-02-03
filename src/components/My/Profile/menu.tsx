import * as React from "react";
import { useContext } from "react";
import { Menu, Icon } from "antd";
import { NextRouter } from "next/router";
import Link from "next/link";
import Container from "~/components/Container";
import UserContext from "~/context";

interface IProps {
  router: NextRouter;
}

const ProfileMenu = ({ router }: IProps) => {
  const [user]= useContext(UserContext);
  const selected = router.pathname.replace(/\/$/, "");

  return (
    <div className="profile-menu">
      <Container>
        <Menu className="menu" mode="horizontal" selectedKeys={[selected]}>
          <Menu.Item key="/my/library">
            <Link href="/my/library">
              <a>
                <Icon type="folder" />
                Миний сан
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/my/reads">
            <Link href="/my/reads">
              <a>
                <Icon type="history" />
                Сүүлд уншсан
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/my/bookmarks">
            <Link href="/my/bookmarks">
              <a>
                <Icon type="star" />
                Хадгалсан
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/my/membership">
            <Link href="/my/membership">
              <a>
                <Icon type="user" />
                Гишүүнчлэл
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/my/history">
            <Link href="/my/history">
              <a>
                <Icon type="shopping-cart" />
                Худалдан авалт
              </a>
            </Link>
          </Menu.Item>
          {user &&
            user.roles_connection &&
            user.roles_connection.filter(
              ({ role }: any) =>
                [
                  "organization_manager",
                  "organization_worker",
                  "content_manager",
                  "admin"
                ].indexOf(role.name) > -1
            ).length > 0 && (
              <Menu.Item key="/dashboard">
                <Link href="/dashboard">
                  <a>
                    <Icon type="appstore" />
                    Удирдах самбар
                  </a>
                </Link>
              </Menu.Item>
            )}
          {/* <Menu.Item key="/control">
            <Link href="/control">
              <a><Icon type="control" />
              Хяналтын хуудас</a>
            </Link>
          </Menu.Item> */}
        </Menu>
      </Container>
    </div>
  );
};

export default ProfileMenu;
