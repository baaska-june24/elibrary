import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Modal, Table, Col, Row, Icon, message, Spin } from "antd";
import {
  GET_WITHDRAWAL_REQUEST,
  INSERT_WITHDRAWAL_REQUEST
} from "~/queries/payment.graphql";
import numeral from "numeral";
import moment from "moment";
import {
  Get_Withdrawal_RequestQuery,
  Get_Withdrawal_RequestQueryVariables,
  Insert_Withdrawal_RequestMutation,
  Insert_Withdrawal_RequestMutationVariables
} from "~/generated/graphql";
import UserContext from "~/context";

interface IProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  org: any;
  orgBalance: any;
  role: any;
  balanceState: boolean;
  setBalanceState: (balanceState: boolean) => void;
}

const PaymentHistory = (props: IProps) => {
  const [user]= React.useContext(UserContext);
  const [status, setStatus] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const { data, refetch } = useQuery<
    Get_Withdrawal_RequestQuery,
    Get_Withdrawal_RequestQueryVariables
  >(GET_WITHDRAWAL_REQUEST, {
    context: {
      headers: {
        "X-Hasura-Role": props.role
      }
    },
    variables: {
      organization_id: props.org && props.org.id
    }
  });

  const [withdrawRequestAction] = useMutation<
    Insert_Withdrawal_RequestMutation,
    Insert_Withdrawal_RequestMutationVariables
  >(INSERT_WITHDRAWAL_REQUEST);

  React.useEffect(() => {
    refetch({
      organization_id: props.org && props.org.id
    });
  }, [status]);

  const withdrawal_request = async () => {
    setLoading(true);
    if (
      data &&
      data.payment_withdraw_requests.filter(request => !request.is_transfered)
        .length > 0
    ) {
      message.error(
        "Уучлаарай танд хүлээгдэж буй хүсэлт байгаа тул дахин хүсэлт илгээх боломжгүй"
      );
    }
    await withdrawRequestAction({
      context: {
        headers: {
          "X-Hasura-Role": props.role
        }
      },
      variables: {
        organization_id: props.org && props.org.id,
        user_id: user && user.id,
        amount: props.orgBalance && props.orgBalance.end_balance
      }
    });
    await message.success("Хүсэлт амжилттай илгээгдлээ");
    await setStatus(!status);
    await props.setBalanceState(!props.balanceState);
    setLoading(false);
  };

  const dataSource = (data && data.payment_withdraw_requests) || [];
  const columns = [
    {
      title: "Дүн",
      dataIndex: "amount",
      key: "key"
    },
    {
      title: "Хүсэлт үүсгэсэн ",
      dataIndex: "created_at",
      render: (item: string) => moment(item).format("YYYY/MM/DD HH:mm:ss"),
      key: "key"
    },
    {
      title: "Статус",
      dataIndex: "is_transfered",
      render: (item: any) =>
        item === true ? <div>Шилжүүлсэн</div> : <div>Хүлээгдэж буй</div>
    },
    {
      title: "Хүсэлтийг шийдвэрлэсэн",
      dataIndex: "updated_at",
      render: (item: string) => moment(item).format("YYYY/MM/DD HH:mm:ss"),
      key: "key"
    }
  ];
  return (
    <Modal
      width={800}
      title="МИНИЙ ДАНС"
      visible={props.visible}
      footer={null}
      onCancel={() => props.setVisible(false)}
    >
      <Spin spinning={loading} tip={"Уншиж байна..."}>
        <Row gutter={24}>
          <Col md={8}>
            {props.orgBalance &&
            parseInt(props.orgBalance.end_balance) > 50000 ? (
              (data &&
                data.payment_withdraw_requests.filter(
                  request => !request.is_transfered
                ).length > 0 && (
                  <div
                    style={{
                      background: "#999",
                      fontSize: "12px",
                      textAlign: "center",
                      borderRadius: "10px",
                      padding: "10px ",
                      color: "#FFF"
                    }}
                  >
                    Танд хүлээгдэж буй хүсэлт байна
                  </div>
                )) || (
                <div
                  style={{
                    background: "#f28a0b",
                    fontSize: "14px",
                    textAlign: "center",
                    borderRadius: "10px",
                    padding: "10px ",
                    color: "#FFF",
                    cursor: "pointer"
                  }}
                  onClick={() => withdrawal_request()}
                >
                  <div style={{ fontSize: "18px" }}>
                    ₮ <Icon type="arrow-right" /> <Icon type="wallet" />
                  </div>
                  Мөнгө татах хүсэлт илгээх
                </div>
              )
            ) : (
              <div
                style={{
                  background: "#999",
                  fontSize: "12px",
                  textAlign: "center",
                  borderRadius: "10px",
                  padding: "10px ",
                  color: "#FFF"
                }}
              >
                Таны боломжит үлдэгдэл 50000₮ дээш тохиолдолд мөнгө татах хүсэлт
                илгээх боломжтой
              </div>
            )}
          </Col>
          <Col md={8}>
            <div
              style={{
                borderRadius: "10px",
                border: "1px dashed #999",
                padding: "10px 10px 10px 10px",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: 600,
                color: " #ff9933"
              }}
            >
              <h4 style={{ fontWeight: 600 }}>Нийт орлого</h4>
              <p>
                {props.orgBalance && parseInt(props.orgBalance.total_amount) > 0
                  ? numeral(parseInt(props.orgBalance.total_amount))
                      .format("0,0 $")
                      .replace("$", "₮")
                  : 0}
              </p>
            </div>
          </Col>
          <Col md={8}>
            <div
              style={{
                borderRadius: "10px",
                border: "1px dashed #999",
                padding: "10px 10px 10px 10px",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: 600,
                color: " #ff9933"
              }}
            >
              <h4 style={{ fontWeight: 600 }}>Татварын дараах</h4>
              <p>
                {props.orgBalance && parseInt(props.orgBalance.after_vat) > 0
                  ? numeral(parseInt(props.orgBalance.after_vat))
                      .format("0,0 $")
                      .replace("$", "₮")
                  : 0}
              </p>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }} gutter={24}>
          <Col md={8}>
            <div
              style={{
                borderRadius: "10px",
                border: "1px dashed #999",
                padding: "10px 10px 10px 10px",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: 600,
                color: " #ff9933"
              }}
            >
              <h4 style={{ fontWeight: 600 }}>Esan шимтгэл</h4>
              <p>
                {props.orgBalance && parseInt(props.orgBalance.esan_amount) > 0
                  ? numeral(parseInt(props.orgBalance.esan_amount))
                      .format("0,0 $")
                      .replace("$", "₮")
                  : 0}
              </p>
            </div>
          </Col>
          <Col md={8}>
            <div
              style={{
                borderRadius: "10px",
                border: "1px dashed #999",
                padding: "10px 10px 10px 10px",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: 600,
                color: " #ff9933"
              }}
            >
              <h4 style={{ fontWeight: 600 }}>Татан авалт хийсэн</h4>
              <p>
                {props.orgBalance &&
                parseInt(props.orgBalance.total_withdrawed_amount) > 0
                  ? numeral(parseInt(props.orgBalance.total_withdrawed_amount))
                      .format("0,0 $")
                      .replace("$", "₮")
                  : 0}
              </p>
            </div>
          </Col>
          <Col md={8}>
            <div
              style={{
                borderRadius: "10px",
                border: "1px dashed #999",
                padding: "10px 10px 10px 10px",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: 600,
                color: " #ff9933"
              }}
            >
              <h4 style={{ fontWeight: 600 }}>Таны боломжит үлдэгдэл</h4>
              <p>
                {props.orgBalance && parseInt(props.orgBalance.end_balance) > 0
                  ? numeral(parseInt(props.orgBalance.end_balance))
                      .format("0,0 $")
                      .replace("$", "₮")
                  : 0}
              </p>
            </div>
          </Col>
        </Row>
        <Row gutter={12} style={{ marginTop: "20px" }}>
          <Col md={24}>
            <h4>Татан авалтын түүх </h4>
            <Table
              columns={columns}
              dataSource={dataSource}
              size="small"
              style={{
                fontSize: "12px",
                border: "1px dashed #999",
                borderRadius: "5px"
              }}
            />
          </Col>
        </Row>
      </Spin>
    </Modal>
  );
};

export default PaymentHistory;
