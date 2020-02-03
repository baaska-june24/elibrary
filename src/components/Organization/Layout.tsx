import * as React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useQuery } from "@apollo/react-hooks";
import { Skeleton } from "antd";
import UserContext from "~/context";
import {
  Get_Single_Organization_InfoQuery,
  Get_Single_Organization_InfoQueryVariables
} from "~/generated/graphql";
import { GET_SINGLE_ORGANIZATION_INFO } from "~/queries/organizations.graphql";

// components
import Header from "./Header";

const Error404 = dynamic(() => import("~/components/Errors/404"));

interface IProps {
  children: React.ReactElement;
}

const OrganizationLayout = (props: IProps) => {
  const router = useRouter();
  const [user]= React.useContext(UserContext);
  const organizationId: any = router.query.id;

  const { data, loading } = useQuery<
    Get_Single_Organization_InfoQuery,
    Get_Single_Organization_InfoQueryVariables
  >(GET_SINGLE_ORGANIZATION_INFO, {
    variables: { id: organizationId }
  });

  if (data && !loading && !data.organization) {
    return <Error404 />;
  }
  const isManagerOrWorker =
    (user &&
      user.organizations &&
      user.organizations
        .map(({ organization_id }: any) => organization_id)
        .indexOf(parseInt(organizationId, 10)) > -1) ||
    (user &&
      user.roles_connection &&
      user.roles_connection[0].role.name === "admin");

  const contentCount =
    (data &&
      data.organization &&
      data.organization.contents_connection_aggregate &&
      data.organization.contents_connection_aggregate.aggregate &&
      data.organization.contents_connection_aggregate.aggregate.count) ||
    0;
  return (
    <Skeleton active loading={loading}>
      {data && data.organization && (
        <>
          <Header
            isManagerOrWorker={isManagerOrWorker}
            organization={data.organization}
            contentCount={contentCount}
          />
          {props.children}
        </>
      )}
    </Skeleton>
  );
};

export default OrganizationLayout;
