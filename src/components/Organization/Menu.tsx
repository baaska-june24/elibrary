import * as React from "react";
import { Menu, Icon } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

interface IProps {
  active?: string;
  organization: any;
}
const ProfileMenu = (props: IProps) => {
  const router = useRouter();
  const { organization } = props;
  const organizationLink = `/organizations/${organization.id}`;
  const selected = router.asPath.replace(/\/$/, "");

  const Title = (type: any) => {
    switch (type) {
      case "school":
        return "Сургуулийн контент";
      case "individual":
        return "Зохиолчийн контент";
      case "company":
        return "Байгууллагын контент";
    }
  };
  const type = organization && organization.type;

  return (
    <Menu className="menu" mode="horizontal" selectedKeys={[selected]}>
      <Menu.Item key={organizationLink}>
        <Link href={organizationLink}>
          <a>
            <Icon type="folder" />
            {Title(type)}
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key={`${organizationLink}/info`}>
        <Link href={`${organizationLink}/info`}>
          <a>
            <Icon type="flag" />
            Танилцуулга
          </a>
        </Link>
      </Menu.Item>
      {/* <Menu.Item key="studentregister">
          <Link href={`/organizations/${id}/register`}>
            <a><Icon type="user" />
            Оюутан бүртгүүлэх</a>
          </Link>
        </Menu.Item> */}
    </Menu>
  );
};

export default ProfileMenu;
