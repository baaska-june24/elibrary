import * as React from "react";
import { useSubscription } from "@apollo/react-hooks";
import { Table, Tag } from "antd";
import Link from "next/link";
import moment from "moment";
import numeral from "numeral";
import { isMobile } from "react-device-detect";
import {
  Get_Transaction_ListSubscription,
  Get_Transaction_ListSubscriptionVariables,
  Payment_Transactions
} from "~/generated/graphql";
import { GET_TRANSACTION_LIST } from "~/queries/payment.graphql";
import "./style.less";

const { Column } = Table;

const formatPrice = (price: any) =>
  numeral(price)
    .format("0,0 $")
    .replace("$", "₮");
const PaymentHistory = () => {
  let currentDate: any = moment().subtract(1, "hour");

  if (
    moment()
      .subtract(1, "hour")
      .diff(currentDate, "minute") > 1
  ) {
    currentDate = moment().subtract(1, "hour");
  }

  const { data } = useSubscription<
    Get_Transaction_ListSubscription,
    Get_Transaction_ListSubscriptionVariables
  >(GET_TRANSACTION_LIST, {
    variables: {
      createdDate: currentDate.format("YYYY-MM-DD HH:mm:ss")
    }
  });

  return (
    <Table
      rowKey="id"
      dataSource={data && data.payment_transactions}
      pagination={false}
      size="small"
      style={{ fontSize: "12px" }}
    >
      {!isMobile && <Column title="Дугаар" dataIndex="id" key="id" />}

      <Column
        title="Огноо"
        dataIndex="created_at"
        key="created_at"
        render={(_, transaction: Payment_Transactions) =>
          transaction.created_at
        }
      />
      {!isMobile && (
        <Column
          title="Төлбөрийн хэлбэр"
          dataIndex="payment_type"
          key="payment_type"
        />
      )}

      <Column
        title="Дүн"
        dataIndex="amount"
        key="amount"
        render={(amount: any) => formatPrice(amount)}
      />
      <Column
        title="Төлөв"
        dataIndex="status"
        key="status"
        render={(_, item: Payment_Transactions) => {
          const tagColor =
            item.status === "success"
              ? "green"
              : item.status === "pending"
              ? "orange"
              : "red";
          const statusText =
            item.status === "success"
              ? "Амжилттай"
              : item.status === "pending"
              ? "Хүлээгдэж байгаа"
              : "Алдаа гарсан";
          return <Tag color={tagColor}>{statusText}</Tag>;
        }}
      />
    </Table>
  );
};

export default PaymentHistory;
