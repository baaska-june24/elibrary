import * as React from "react";
import { useContext } from "react";
import Link from "next/link";
import Auth from "@aws-amplify/auth";
import { Avatar, Dropdown, Menu, Icon, Row, Col, Spin } from "antd";
import { AvatarProps } from "antd/lib/avatar";
import Button from "~/components/Button";
import UserContext from "~/context";
import { useMedia } from "use-media";

import "./style.less";
import { getImageUrl, canLoadWebp } from "~/utils/helpers";

export default () => {
  const [user, loading] = useContext(UserContext);
  const isMobileScreen = useMedia({ maxWidth: 767 });
  
  const handleSignOut = async () => {
    await localStorage.clear();
    await Auth.signOut();
    window.history.go(0);
  };

  if (loading) {
    const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
    return <Spin indicator={antIcon} />;
  }

  if (user) {
    const username = user.firstname || user.email;
    const avatarFile: any =
      (user.files_connection &&
        user.files_connection.length > 0 &&
        user.files_connection[0]) ||
      null;

    let avatarUrl = null;

    if (
      avatarFile &&
      avatarFile.file_avatar &&
      user &&
      user.files_connection &&
      user.files_connection.length === 1
    ) {
      const imageRequest = JSON.stringify({
        bucket:
          user.files_connection[0].file && user.files_connection[0].file.bucket,
        edits: {
          resize: {
            fit: "contain",
            height: 40,
            width: 40
          },
          [canLoadWebp ? "webp" : "jpeg"]: {
            quality: 80
          }
        },
        key: avatarFile.file_avatar
      });
      avatarUrl = getImageUrl(imageRequest);
    }

    const avatarProps: AvatarProps = {
      children: username[0].toUpperCase(),
      shape: "square",
      size: "large",
      src: avatarUrl || "",
      style: { backgroundColor: "black" }
    };

    const avatar = <Avatar {...avatarProps} />;

    const menu = (
      <Menu>
        <div className="user-info">
          <Row gutter={6} type="flex" justify="space-between" align="middle">
            <Col span={6}>{avatar}</Col>
            <Col span={18}>
              <h3>{username}</h3>
              <Link href="/my/profile">
                <a>Миний бүртгэл</a>
              </Link>
            </Col>
          </Row>
        </div>
        <Menu.Divider />
        {isMobileScreen ? (
          <Menu.Item>
            <Link href="/payment">
              <a>
                <Icon type="shopping-cart" /> Миний сагс
              </a>
            </Link>
          </Menu.Item>
        ) : null}
        <Menu.Item>
          <Link href="/my/library">
            <a>
              <Icon type="folder" /> Миний сан
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/my/reads">
            <a>
              <Icon type="history" /> Сүүлд уншсан
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/my/bookmarks">
            <a>
              <Icon type="star" /> Хадгалсан
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/my/membership">
            <a>
              <Icon type="user" /> Гишүүнчлэл
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/my/history">
            <a>
              <Icon type="shopping-cart" /> Худалдан авалт
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <a href="https://info.esan.mn/faq/" target="_blank">
            <Icon type="question" /> Тусламж
          </a>
        </Menu.Item>
        <Menu.Divider />
        {user &&
          user.roles_connection.filter(
            ({ role }: any) =>
              [
                "organization_manager",
                "organization_worker",
                "content_manager",
                "admin"
              ].indexOf(role.name) > -1
          ).length > 0 && (
            <Menu.Item>
              <Link href="/dashboard">
                <a>
                  <Icon type="appstore" /> Удирдах самбар
                </a>
              </Link>
            </Menu.Item>
          )}
        <Menu.Item>
          <a href="https://info.esan.mn/doc/" target="_blank">
            <Icon type="video-camera" /> Заавар
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item onClick={handleSignOut}>
          <Icon type="poweroff" /> Гарах
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu} placement="bottomRight">
        {avatar}
      </Dropdown>
    );
  }

  return (
    <Button type="link" href="/auth/signin">
      <Icon type="login" />
      {!isMobileScreen && <span>Нэвтрэх</span>}
    </Button>
  );
};
