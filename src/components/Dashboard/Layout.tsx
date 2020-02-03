import * as React from "react";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { Row, Col, Icon, Spin } from "antd";
import withLayout from "~/components/Layout";
import DashboardHeader from "~/components/Dashboard/DashboardHeader";
import Container from "~/components/Container";
import LeftMenu from "~/components/Dashboard/LeftMenu";
import UserContext from "~/context";
import {
  Get_List_OrganizationsQuery,
  Get_List_OrganizationsQueryVariables
} from "~/generated/graphql";
import Header from "~/components/Header";
import ProfileMenu from "~/components/My/Profile/menu";
import { GET_LIST_ORGANIZATIONS } from "~/queries/organizations.graphql";

import useOrganizationRole from "~/hooks/useOrganizationRole";

import "./style.less";
import "~/components/Organization/style.less";

const DashboardLayout = (props: any) => {
  const [user]= useContext(UserContext);
  const router = useRouter();
  const [org, setOrg] = useState(null);

  let initialVariables: Get_List_OrganizationsQueryVariables = {
    where: {
      users_connection: { user_id: { _eq: user && user.id } }
    }
  };
  if (
    user &&
    user.roles_connection.filter(
      ({ role }: any) => ["admin", "content_manager"].indexOf(role.name) > -1
    ).length > 0
  ) {
    initialVariables = {
      where: { is_active: { _eq: true } }
    };
  }
  const [role, loadAction, roleLoading] = useOrganizationRole();

  const { data, loading } = useQuery<
    Get_List_OrganizationsQuery,
    Get_List_OrganizationsQueryVariables
  >(GET_LIST_ORGANIZATIONS, {
    context: {
      headers: {
        "X-Hasura-Role":
          user &&
          user.roles_connection.length > 0 &&
          user.roles_connection[0].role.name
      }
    },
    variables: initialVariables
  });

  useEffect(() => {
    if (data && data.organizations && data.organizations.length > 0) {
      if (localStorage.organization) {
        setCurrentOrganization(JSON.parse(localStorage.organization));
      } else {
        setCurrentOrganization(data.organizations[0]);
      }
    }
  }, [data]);

  const setCurrentOrganization = (organization: any) => {
    setOrg(organization);
    loadAction(organization.id);
  };

  if (loading || roleLoading) {
    return (
      <Container>
        <Spin />
      </Container>
    );
  }

  if (user && data && data.organizations.length > 0) {
    return (
      <>
        <Header>
          <DashboardHeader
            organizations={data && data.organizations}
            org={org}
            setOrg={setCurrentOrganization}
            role={role}
          />
        </Header>
        <ProfileMenu router={router} />
        <Container>
          <Row gutter={32} style={{ marginTop: "2rem" }}>
            <Col md={6}>
              <LeftMenu router={router} />
            </Col>
            {org && role && (
              <Col md={18}>
                {React.cloneElement(props.children, {
                  organization: org,
                  role: role
                })}
              </Col>
            )}
          </Row>
        </Container>
      </>
    );
  }
  return (
    <div style={{ textAlign: "center", color: "#EEEEEE", margin: "100px" }}>
      <Icon type="disconnect" style={{ fontSize: 100 }} />
      <h2 style={{ color: "#EEEEEE" }}>Хандах боломжгүй</h2>
    </div>
  );
};

export default withLayout({
  allowedRoles: [
    "organization_manager",
    "organization_worker",
    "admin",
    "content_manager"
  ],
  requireSignIn: true,
  ssr: false
})(DashboardLayout);
