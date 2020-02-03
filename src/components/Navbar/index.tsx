import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMedia } from "use-media";
import { Row, Col, Menu, Icon, Button, Drawer, Badge } from "antd";
import { MenuMode } from "antd/lib/menu";

import Container from "~/components/Container";
import Logo from "~/components/Logo";
import UserDropdown from "~/components/UserDropdown";
import Search from "~/components/Search";
import { initialState, reducer } from "~/reducer/basket";

import "./style.less";
interface INavManuProps {
  mode: MenuMode;
}

const NavMenu = (props: INavManuProps) => {
  const router = useRouter();
  let selected_type: any = "";

  if (router.query.type) {
    selected_type = router.query.type;
  }

  if (router.pathname === "/") {
    selected_type = "home";
  }

  // const selected = router.asPath.replace(/\/$/, "");

  return (
    <Menu mode={props.mode} selectedKeys={[selected_type]}>
      <Menu.Item key="home">
        <Link href="/">
          <a>Нүүр</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="book">
        <Link href="/contents?type=book">
          <a>Ном</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="magazine">
        <Link href="/contents?type=magazine">
          <a>Сэтгүүл</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="newspaper">
        <Link href="/contents?type=newspaper">
          <a>Сонин</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="dissertation">
        <Link href="/contents?type=dissertation">
          <a>Эрдмийн ажил</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="research">
        <Link href="/contents?type=research">
          <a>Судалгаа, статистик</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="diploma">
        <Link href="/contents?type=diploma">
          <a>Дипломын ажил</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export const SubNav = () => {
  const isMobileScreen = useMedia({ maxWidth: 767 });

  const contentUploadButton = (
    <Link href="/upload">
      <a className="ant-btn ant-btn-primary ant-btn-round">
        <Icon type="cloud-upload" /> Контент оруулах
      </a>
    </Link>
  );

  if (isMobileScreen) {
    return null;
  }

  return (
    <div className="esan-sub-navigation">
      <Container>
        <Row type="flex" align="middle" justify="space-between">
          <Col xs={24} sm={24} md={18}>
            {<NavMenu mode="horizontal" />}
          </Col>
          <Col md={6} style={{ textAlign: "right" }}>
            {contentUploadButton}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export const DesktopNav = (props: any) => {
  const [{ count }] = React.useReducer(reducer, initialState);
  return (
    <div className="esan-navigation">
      <Container>
        <Row gutter={10} type="flex" align="middle">
          <Col md={4} sm={18} xs={18}>
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </Col>
          <Col md={10} sm={2} xs={2}>
            <Search
              onSearch={props.handleSearch}
              placeholder="Хайх үгээ оруулна уу..."
            />
          </Col>
          <Col md={10} sm={2} xs={2} style={{ textAlign: "right" }}>
            <Link href="/plagiarism">
              <a className="ant-btn ant-btn-link">
                <Icon type="copy" /> <span>Хуулбар шалгуур</span>
              </a>
            </Link>
            <Link href="/payment">
              <a className="ant-btn ant-btn-link">
                <Icon type="shopping-cart" />
                <Badge count={count || 0}>Сагс</Badge>
              </a>
            </Link>
            <UserDropdown />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export const MobileNav = (props: any) => {
  const [isShowLeftDrawer, setShowLeftDrawer] = React.useState(false);
  const [isShowTopDrawer, setShowTopDrawer] = React.useState(false);

  return (
    <>
      <div className="esan-navigation">
        <Container>
          <Row gutter={10} type="flex" align="middle">
            <Col sm={16} xs={12}>
              <Link href="/">
                <a>
                  <Logo />
                </a>
              </Link>
            </Col>
            <Col sm={8} xs={12} style={{ textAlign: "right" }}>
              <Button onClick={() => setShowLeftDrawer(true)} type="link">
                <Icon type="menu" />
              </Button>
              <Button onClick={() => setShowTopDrawer(true)} type="link">
                <Icon type="search" />
              </Button>
              <UserDropdown />
            </Col>
          </Row>
        </Container>
      </div>
      <Drawer
        placement="top"
        height="84"
        visible={isShowTopDrawer}
        bodyStyle={{
          background: "linear-gradient(135deg, #ffa100, #b11248)"
        }}
        className="esan-top-drawer"
        onClose={() => setShowTopDrawer(false)}
      >
        <Search
          drawer
          onSearch={props.handleSearch}
          placeholder="Хайх үгээ оруулна уу..."
        />
      </Drawer>
      <Drawer
        placement="left"
        width="250px"
        closable
        visible={isShowLeftDrawer}
        onClose={() => setShowLeftDrawer(false)}
      >
        <NavMenu mode="inline" />
      </Drawer>
    </>
  );
};

export default () => {
  const router = useRouter();
  const isMobileScreen = useMedia({ maxWidth: 767 });

  const handleSearch = (query: string) => {
    router.push(`/contents?query=${query}`);
  };

  if (isMobileScreen) {
    return <MobileNav handleSearch={handleSearch} />;
  }

  return <DesktopNav handleSearch={handleSearch} />;
};
