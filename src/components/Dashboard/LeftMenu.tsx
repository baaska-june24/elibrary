import * as React from "react";
import { Menu } from "antd";
import Link from "next/link";
import { NextRouter } from "next/router";

interface IProps {
  router: NextRouter;
}

const LeftMenu = ({ router }: IProps) => {
  const selected = router.pathname.replace(/\/$/, "");
  return (
    <Menu selectedKeys={[selected]} mode="inline">
      <Menu.Item key="/dashboard">
        <Link href="/dashboard">
          <a>Контент удирдах</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/dashboard/packages">
        <Link href="/dashboard/packages">
          <a>Багц</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/dashboard/promotions">
        <Link href="/dashboard/promotions">
          <a>Урамшуулал</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/dashboard/series">
        <Link href="/dashboard/series">
          <a>Цуврал</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/dashboard/worker">
        <Link href="/dashboard/worker">
          <a>Ажилтан</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/dashboard/sales">
        <Link href="/dashboard/sales">
          <a>Борлуулалт</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
