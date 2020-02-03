import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect, useContext, useReducer } from "react";
import { useSubscription, useMutation } from "@apollo/react-hooks";
import {
  Row,
  Col,
  Button,
  notification,
  Radio,
  Input,
  Spin,
  message
} from "antd";
import withLayout from "~/components/Layout";
import Container from "~/components/Container";
import CardList from "~/components/Payment/card_list";
import PaymentMethod from "~/components/Payment/payment_method";
import { initialState, reducer } from "~/reducer/basket";
import UserContext from "~/context";
import {
  Create_InvoiceMutation,
  Create_InvoiceMutationVariables,
  Create_TransactionMutation,
  Create_TransactionMutationVariables,
  Get_Transaction_By_Header_IdSubscription,
  Get_Transaction_By_Header_IdSubscriptionVariables,
  Check_Organization_RegistrationMutation,
  Check_Organization_RegistrationMutationVariables
} from "~/generated/graphql";
import {
  GET_TRANSACTION_BY_HEADER_ID,
  CREATE_TRANSACTION,
  CREATE_INVOICE,
  CHECK_ORGANIZATION_REGISTRATION
} from "~/queries/payment.graphql";
import EbarimtAfter from "~/components/Payment/EbarimtAfter";

let timer: NodeJS.Timeout | null = null;

const PaymentTypes = () => {
  const router = useRouter();
  const [user]= useContext(UserContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isPerson, setIsPerson] = useState(true);
  const [headerId, setHeaderId] = useState();
  const [isPayPressed, setIsPayPressed] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [orgRegister, setOrgRegister] = useState("");
  const [email, setEmail] = useState("");
  const [orgInfo, setOrgInfo] = useState();
  const [invoiceInfo, setInvoiceInfo] = useState();
  const [status, setStatus] = useState();

  const { data } = useSubscription<
    Get_Transaction_By_Header_IdSubscription,
    Get_Transaction_By_Header_IdSubscriptionVariables
  >(GET_TRANSACTION_BY_HEADER_ID, {
    variables: { id: headerId ? headerId : -1 }
  });

  const [createTransaction] = useMutation<
    Create_TransactionMutation,
    Create_TransactionMutationVariables
  >(CREATE_TRANSACTION);

  const [createInvoice] = useMutation<
    Create_InvoiceMutation,
    Create_InvoiceMutationVariables
  >(CREATE_INVOICE);

  const [checkOrganizationRegistration] = useMutation<
    Check_Organization_RegistrationMutation,
    Check_Organization_RegistrationMutationVariables
  >(CHECK_ORGANIZATION_REGISTRATION);

  useEffect(() => {
    const result =
      data && data.payment_transactions && data.payment_transactions.length > 0
        ? data.payment_transactions[0]
        : null;
    const isSuccess = result && result.status === "success";
    if (isSuccess && status !== "CHECKNOATUS") {
      notification.success({
        duration: 3,
        message: "Гүйлгээ амжилттай хийгдлээ"
      });
      dispatch({ type: "CLEAR" });
      setStatus("CHECKNOATUS");
    } else if (isPayPressed && isSuccess && result.noatus) {
      notification.success({
        duration: 3,
        message: "Худалдан авалт амжилттай хийгдлээ"
      });
    }
  }, [data]);

  useEffect(() => {
    if (user) {
      setEmail(user.email);
    }
  }, [user]);

  const handleSave = async () => {
    if (
      (!isPerson && (!orgInfo || !orgInfo.name || orgInfo.name === "")) ||
      !state ||
      !state.items ||
      state.items.length === 0
    ) {
      return;
    }
    const expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const value = expression.test(email.toLowerCase());
    if (email === null || email === "") {
      notification.warning({
        message: "НӨАТУС-н баримт авах имэйлээ оруулна уу"
      });
      return;
    } else if (!value) {
      notification.warning({ message: "Зөв имэйл оруулна уу" });
      return;
    }

    setIsPayPressed(true);
    setStatus("CHECKTRANSACTION");
    setIsLoading(true);
    const totalAmount =
      "test" === process.env.INVOICE_MODE
        ? 10
        : state.items.reduce<number>((a: number, b: any) => a + b.total, 0);
    const totalDiscount = state.items.reduce<number>(
      (a: number, b: any) => a + b.discount,
      0
    );
    const totalQty = state.items.reduce<number>(
      (a: number, b: any) => a + b.qty,
      0
    );

    const headerData = {
      amount: totalAmount,
      details: {
        data:
          state &&
          state.items &&
          state.items.map(item => {
            return {
              content_id: item.type === "content" ? item.item_id : null,
              membership_id: item.type === "membership" ? item.item_id : null,
              package_id: item.type === "package" ? item.item_id : null,
              price: item.price,
              qty: item.qty,
              total: item.total
            };
          })
      },
      discount: totalDiscount,
      qty: totalQty,
      total: totalAmount
    };

    const transactionData: Create_TransactionMutationVariables["data"] = [
      {
        amount: totalAmount,
        header: {
          data: headerData
        },
        meta: {
          email,
          orgRegister,
          organization: orgInfo
        },
        status: "pending"
      }
    ];
    await createTransaction({
      variables: {
        data: transactionData
      }
    })
      .then(async ({ data: resultData }: any) => {
        // Show bankTransaction process
        if (
          resultData &&
          resultData.insert_payment_transactions &&
          resultData.insert_payment_transactions.returning &&
          resultData.insert_payment_transactions.returning.length > 0
        ) {
          const transData = resultData.insert_payment_transactions.returning[0];
          setHeaderId(transData.header_id);
          const result: any = await createInvoice({
            variables: {
              description: "Esan.mn контентийн төлбөр",
              invoiceid: `${transData.id}`,
              totalAmount: `${totalAmount}`
            }
          });
          setInvoiceInfo(result.data.createInvoice);
        }
      })
      .catch(err => message.error(err.message))
      .finally(() => setIsLoading(false));
  };

  const onChangeEbarimtType = (e: any) => {
    setIsPerson(e.target.value);
  };

  const handleChangeOrgRegister = async (e: any) => {
    const currentOrgRegister = e.target.value;
    setOrgRegister(currentOrgRegister);

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    if (currentOrgRegister.length <= 0) {
      return;
    }

    timer = setTimeout(() => {
      checkOrganizationRegistration({
        variables: {
          registerNo: currentOrgRegister
        }
      })
        .then(response => {
          const info =
            response && response.data
              ? response.data.checkOrganizationRegistration
              : null;
          setOrgInfo(info && info.name !== "" ? info : null);
        })
        .catch(() =>
          notification.error({
            message: "Байгууллагын мэдээлэл шалгах боломжгүй байна"
          })
        );
    }, 500);
  };

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const result =
    data && data.payment_transactions && data.payment_transactions.length > 0
      ? data.payment_transactions[0]
      : null;
  const isSuccess = result && result.status === "success";

  return (
    <Spin spinning={isLoading} tip={"Уншиж байна..."}>
      <Head>
        <title>Миний сагс</title>
      </Head>
      <Container>
        <div className="payment">
          <h4>Сагсны мэдээлэл</h4>
          <CardList isPayPressed={isPayPressed} />
          <Row style={{ marginTop: 10 }} gutter={32}>
            <Col lg={8} md={12} sm={24} xs={24}>
              <Radio.Group
                disabled={isPayPressed}
                value={isPerson}
                onChange={onChangeEbarimtType}
                style={{ marginBottom: "0.5rem" }}
              >
                <Radio value={true}>Хувь хүн</Radio>
                <Radio value={false}>Байгууллага</Radio>
              </Radio.Group>
              {!isPerson && (
                <>
                  <Input
                    disabled={isPayPressed}
                    placeholder="Регистерийн дугаар"
                    defaultValue={orgRegister}
                    allowClear
                    onChange={handleChangeOrgRegister}
                  />
                  <h4 style={{ margin: "0.5rem 0" }}>
                    {`Байгууллагын нэр: 
                        ${
                          !orgRegister || orgRegister === ""
                            ? ""
                            : orgInfo
                            ? orgInfo.name
                            : "Зөв регистерийн дугаар оруулна уу"
                        }
                          `}
                  </h4>
                </>
              )}
              <Input
                disabled={isPayPressed}
                placeholder="Имэйл хаяг"
                value={email}
                allowClear
                onChange={handleEmail}
                style={{ marginBottom: "0.5rem" }}
              />
            </Col>
            <Col lg={8} md={12} sm={24} xs={24}>
              <Button
                shape="round"
                loading={isPayPressed}
                type="primary"
                size="large"
                htmlType="submit"
                onClick={handleSave}
              >
                {isPayPressed
                  ? status === "CHECKTRANSACTION"
                    ? "Гүйлгээ хийгдэхийг хүлээж байна"
                    : "Амжилттай"
                  : "Тооцоо хийх"}
              </Button>
            </Col>
          </Row>
        </div>

        {isPayPressed && status === "CHECKTRANSACTION" && (
          <PaymentMethod invoiceInfo={invoiceInfo} />
        )}

        {isPayPressed && isSuccess && result.noatus && (
          <EbarimtAfter id={result.id} />
        )}
        <style jsx>{`
          .payment {
            border-radius: 5px;
            border-color: #dddddd;
            margin: 30px;
            text-align: center;
          }
          .payment p {
            font-size: 13px;
          }
          .payment h4 {
            text-align: left;
          }
        `}</style>
      </Container>
    </Spin>
  );
};

export default withLayout({ requireSignIn: true, ssr: false })(PaymentTypes);
