import * as React from "react";
import Link from "next/link";
import { Row, Col, Icon, Select } from "antd";
import Container from "~/components/Container";
import { getImageUrl, filterOption } from "~/utils/helpers";
import { Organizations } from "~/generated/graphql";
import { GET_ORGANIZATION_ACCOUNT } from "~/queries/organizations.graphql";
import { GET_ORGANIZATION_BALANCE } from "~/queries/payment.graphql";
import {
  Get_Organization_AccountQuery,
  Get_Organization_AccountQueryVariables,
  Get_Organization_BalanceQuery,
  Get_Organization_BalanceQueryVariables
} from "~/generated/graphql";
import { useQuery } from "@apollo/react-hooks";
import UserContext from "~/context";
import { useContext } from "react";
import PaymentHistory from "~/components/Dashboard/DashboardPaymentHistory";

const { Option } = Select;

interface IProps {
  setOrg?: (org: object) => void;
  org?: Organizations;
  organizations: any;
  role: any;
}

const DashboardHeader = (props: IProps) => {
  const [user]= useContext(UserContext);
  const [visible, setVisible] = React.useState(false);
  const [balanceState, setBalanceState] = React.useState(false);

  const { data, refetch } = useQuery<
    Get_Organization_BalanceQuery,
    Get_Organization_BalanceQueryVariables
  >(GET_ORGANIZATION_BALANCE, {
    context: {
      headers: {
        "X-Hasura-Role": props.role
      }
    },
    variables: {
      where: { organization_id: { _eq: props.org && props.org.id } }
    }
  });

  React.useEffect(() => {
    refetch({
      where: { organization_id: { _eq: props.org && props.org.id } }
    });
  }, [balanceState]);

  const orgBalance = data && data.payment_vw_organizations_balance[0];

  console.log("ORE", orgBalance);

  let avatarUrl = null;
  const avatarKey = props.org && props.org.avatar;
  const imageRequest = JSON.stringify({
    bucket:
      process.env.NODE_ENV === "production" ? "cdn.esan.mn" : "cdn.dev.esan.mn",
    edits: {
      resize: {
        fit: "cover"
      }
    },
    key: avatarKey
  });

  avatarUrl = getImageUrl(imageRequest);
  return (
    <Container style={{ paddingTop: "4rem" }}>
      <Row gutter={32} type="flex" align="middle">
        <Col md={2} sm={4} xs={8}>
          <div className="organization-profile-img">
            <img
              src={avatarUrl}
              alt="avatar"
              style={{ marginTop: 0, marginLeft: "-20px" }}
            />
          </div>
        </Col>
        <Col md={10} sm={20} xs={16}>
          <div className="organization-profile-info">
            <Link href={`/organizations/${props.org && props.org.id}`}>
              <a>
                <h3>{props.org && props.org.name}</h3>
              </a>
            </Link>
            <h5>{props.org && props.org.description}</h5>
          </div>
        </Col>
        <Col md={12} sm={24} xs={24}>
          <Row type="flex" gutter={20}>
            {(props.organizations || []).length > 1 && (
              <Col lg={8} md={8} sm={12} xs={12}>
                <div className="info3">
                  <h3>Байгууллага сонгох</h3>
                  <Select
                    showSearch
                    style={{ width: "100%", marginTop: "10px" }}
                    placeholder="Байгууллага сонгох"
                    onChange={(e: any) => {
                      if (props.setOrg) {
                        props.setOrg(props.organizations[e]);
                        localStorage.setItem(
                          "organization",
                          JSON.stringify(props.organizations[e])
                        );
                      }
                    }}
                    defaultValue={
                      localStorage.organization
                        ? JSON.parse(localStorage.organization).name
                        : props.organizations[0].name
                    }
                    filterOption={filterOption}
                  >
                    {props.organizations.map(({ name }: any, key: any) => (
                      <Option key={key} value={key}>
                        {name}
                      </Option>
                    ))}
                  </Select>
                </div>
              </Col>
            )}
            <Col lg={8} md={8} sm={12} xs={12}>
              <div className="info1">
                <h3>
                  {props.org &&
                    props.org.contents_connection_aggregate &&
                    props.org.contents_connection_aggregate.aggregate &&
                    props.org.contents_connection_aggregate.aggregate.count}
                </h3>
                <Link href="">
                  <a>
                    <h4>
                      КОНТЕНТ <Icon type="arrow-right" />
                    </h4>
                  </a>
                </Link>
              </div>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <div className="info2">
                <h3>
                  {orgBalance && orgBalance.end_balance > 0
                    ? parseInt(orgBalance && orgBalance.end_balance, 10)
                    : 0}
                  ₮
                </h3>
                <Link href="">
                  <a onClick={() => setVisible(true)}>
                    <h4>
                      МИНИЙ ДАНС <Icon type="arrow-right" />
                    </h4>
                  </a>
                </Link>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <PaymentHistory
        visible={visible}
        setVisible={setVisible}
        org={props.org}
        orgBalance={orgBalance && orgBalance}
        role={props.role}
        setBalanceState={setBalanceState}
        balanceState={balanceState}
      />
    </Container>
  );
};

export default DashboardHeader;
