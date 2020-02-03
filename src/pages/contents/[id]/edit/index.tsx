import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Tabs, Spin } from "antd";
import { useQuery } from "@apollo/react-hooks";
import withLayout from "~/components/Layout";
import Container from "~/components/Container";
import EditForm from "~/components/Edit/";
import UserContext from "~/context";

import { GET_SINGLE_CONTENT } from "~/queries/contents.graphql";
import {
  Get_Single_ContentQuery,
  Get_Single_ContentQueryVariables
} from "~/generated/graphql";

const Error403 = dynamic(() => import("~/components/Errors/403"));

const { TabPane } = Tabs;

const Edit = () => {
  const router = useRouter();
  const [user, userLoading] = React.useContext(UserContext);
  const { data, loading } = useQuery<
    Get_Single_ContentQuery,
    Get_Single_ContentQueryVariables
  >(GET_SINGLE_CONTENT, {
    variables: {
      id: router.query.id
    }
  });

  const content = data && data.content;
  const hasRoleAdminOrContentManager = user?.roles_connection.some(
    ({ role }: any) => ["admin", "content_manager"].indexOf(role.name) > -1
  );
  const hasRoleOrganizationManagerOrWorker = user?.roles_connection.some(
    ({ role }: any) =>
      ["organization_manager", "organization_worker"].indexOf(role.name) > -1
  );

  const renderForm = () => {
    return (
      <Container>
        <div style={{ marginTop: "20px" }} />
        <Tabs defaultActiveKey="1" tabPosition="left">
          <TabPane tab="Ерөнхий мэдээлэл" key="1">
            <EditForm content={content} />
          </TabPane>
        </Tabs>
      </Container>
    );
  };

  if (hasRoleAdminOrContentManager) {
    return renderForm();
  }

  if (
    hasRoleOrganizationManagerOrWorker &&
    content?.organizations.length > 0 &&
    user?.organizations.length > 0 && // ali 1 baiguullagad hamaatai
    content?.organizations[0].organization_id ===
      user?.organizations[0].organization_id // tuhain content bolon hereglegchiin hamaarch bga org ni adil bh
  ) {
    return renderForm();
  }

  return (
    <Spin spinning={userLoading || loading} tip="Түр хүлээнэ үү..">
      {!(userLoading && loading) && <Error403 />}
    </Spin>
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
})(Edit);
