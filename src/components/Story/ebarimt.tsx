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

interface IProps {
  isShow: boolean;
  setIsShow: (visible: boolean) => void;
  id: any;
}
const Ebarimt = (props: IProps) => {
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
    if (meta) {
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
        </>
      );
    } else {
      return "Мэдээлэл олдсонгүй";
    }
  };

  return (
    <Spin spinning={loading}>
      <Container>
        <Modal
          title="E-barimt"
          visible={props.isShow}
          footer={null}
          onCancel={() => props.setIsShow(false)}
        >
          <div className="ebarimt">
            <p>
              <img src="/images/ebarimt.svg" />
            </p>
            {renderData()}
          </div>
        </Modal>
      </Container>
    </Spin>
  );
};

export default Ebarimt;
