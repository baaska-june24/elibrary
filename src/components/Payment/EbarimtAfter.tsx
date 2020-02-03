import * as React from "react";
import { Row, Col, Spin, Modal } from "antd";
import { useSubscription } from "@apollo/react-hooks";
import {
  Get_Transaction_UserSubscription,
  Get_Transaction_UserSubscriptionVariables
} from "~/generated/graphql";
import { GET_TRANSACTION_USER } from "~/queries/payment.graphql";
import Container from "~/components/Container";
import UserContext from "~/context";
import "./style.less";
import Link from "next/link";

interface IProps {
  id: any;
}
const EbarimtAfter = (props: IProps) => {
  const [user]= React.useContext(UserContext);

  const { data, loading } = useSubscription<
    Get_Transaction_UserSubscription,
    Get_Transaction_UserSubscriptionVariables
  >(GET_TRANSACTION_USER, {
    variables: {
      where: {
        user_id: { _eq: user && user.id },
        id: { _eq: props.id },
        status: { _eq: "success" }
      }
    }
  });

  const renderData = () => {
    if (!data) return null;
    const { payment_transactions } = data;
    if (payment_transactions && payment_transactions.length !== 1)
      return "alert";
    const [{ meta }] = payment_transactions;
    return (
      <>
        <div>
          <div
            style={{
              height: "200px",
              margin: "0 auto",
              width: "200px"
            }}
            dangerouslySetInnerHTML={{
              __html: meta.qrImage
            }}
          />
        </div>
        <p>
          <b>{`Огноо: ${meta.date}`}</b>
        </p>
        {meta.lottery && (
          <p>
            <b>{`Сугалааны дугаар: ${meta.lottery}`}</b>
          </p>
        )}
        <p>
          <b>{`ДДТД: ${meta.billId}`}</b>
        </p>
        <p>
          <b>{`Дүн: ${meta.amount}`}</b>
        </p>
        <Link href={`/my/history`}>
          <a>Дэлгэрэнгүй</a>
        </Link>
      </>
    );
  };

  return (
    <Spin spinning={loading}>
      <Container>
        <div className="ebarimt">
          <img src="/images/ebarimt.svg" />
          {renderData()}
        </div>
      </Container>
    </Spin>
  );
};

export default EbarimtAfter;
