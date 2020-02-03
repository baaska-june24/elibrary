import * as React from "react";
import { useContext } from "react";
import { Row, Col, Card } from "antd";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import Container from "~/components/Container";
import UserContext from "~/context";

// Query and mutation
import { GET_SINGLE_ORGANIZATION_INFO } from "~/queries/organizations.graphql";
import {
  Get_Single_Organization_InfoQueryVariables,
  Get_Single_Organization_InfoQuery
} from "~/generated/graphql";

import "./style.less";
import DescEditor from "./Editor";

const LongDescription = () => {
  const [user]= useContext(UserContext);
  const router = useRouter();
  const organizationId: any = router.query.id;

  const { data } = useQuery<
    Get_Single_Organization_InfoQuery,
    Get_Single_Organization_InfoQueryVariables
  >(GET_SINGLE_ORGANIZATION_INFO, {
    variables: { id: organizationId }
  });

  const isManagerOrWorker =
    (user &&
      user.organizations &&
      user.organizations
        .map(({ organization_id }) => organization_id)
        .indexOf(parseInt(organizationId, 10)) > -1) ||
    (user &&
      user.roles_connection &&
      user.roles_connection[0].role.name === "admin");

  const description =
    data && data.organization && data.organization.long_description;

  return (
    <Container>
      <Row
        type="flex"
        gutter={16}
        style={{ marginBottom: "1rem", marginTop: "1rem" }}
        key={1}
      >
        <Col md={24} sm={24} xs={24} key={2}>
          {data && data.organization && (
            <>
              {isManagerOrWorker ? (
                <Card>
                  <DescEditor data={description ?? ""} />
                </Card>
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html: data && data.organization.long_description
                  }}
                />
              )}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default LongDescription;
