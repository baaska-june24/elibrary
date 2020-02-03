import * as React from "react";
import { useState } from "react";
import { useSubscription } from "@apollo/react-hooks";
import { Table, Button, message } from "antd";
import { isMobile } from "react-device-detect";
import Link from "next/link";
import numeral from "numeral";
import "./style.less";
import {
  Get_Transaction_UserSubscription,
  Get_Transaction_UserSubscriptionVariables,
  Payment_Transactions
} from "~/generated/graphql";
import UserContext from "~/context";
import { GET_TRANSACTION_USER } from "~/queries/payment.graphql";
import { canLoadWebp, getImageUrl } from "~/utils/helpers";
import Ebarimt from "./ebarimt";
import moment from "moment";

const { Column } = Table;

const formatPrice = (price: any) =>
  numeral(price)
    .format("0,0 $")
    .replace("$", "₮");
const History = () => {
  const [user]= React.useContext(UserContext);
  const [isShow, setIsShow] = useState(false);
  const [isSelected, setIsSelected] = useState(null);
  const { data } = useSubscription<
    Get_Transaction_UserSubscription,
    Get_Transaction_UserSubscriptionVariables
  >(GET_TRANSACTION_USER, {
    variables: {
      where: {
        user_id: { _eq: user && user.id },
        status: { _eq: "success" }
      }
    }
  });

  const getImage = (fileKey: any) => {
    const coverImageRequest = JSON.stringify({
      bucket: "cdn.esan.mn",
      edits: {
        resize: {
          background: "white",
          fit: "cover",
          width: 40
        },
        [canLoadWebp ? "webp" : "jpeg"]: {
          quality: 80
        }
      },
      key: fileKey
    });
    const url = getImageUrl(coverImageRequest);
    return url;
  };

  const handleShow = (item: any) => {
    setIsShow(true);
    if (!isShow && item) {
      setIsSelected(item.id);
    } else {
      message.info("Мэдээлэл олдсонгүй");
    }
  };

  return (
    <>
      <Table
        rowKey="id"
        dataSource={data && data.payment_transactions}
        pagination={false}
        size="small"
        style={{ fontSize: "12px" }}
      >
        <Column
          title="Контент"
          dataIndex="name"
          key="name"
          render={(_, item: Payment_Transactions) =>
            item &&
            item.header &&
            item.header.details &&
            item.header.details
              .filter(({ content }) => !!content)
              .map(({ content }: any) => {
                const coverFile =
                  content.files && content.files.length > 0 && content.files[0];
                const coverKey = coverFile && coverFile.file_id;
                return (
                  <Link href={`/contents/${content.id}`}>
                    <a>
                      <img
                        src={getImage(coverKey)}
                        width="40"
                        className="rounded"
                      />
                      {` ${content.name}`}
                    </a>
                  </Link>
                );
              })
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
          title="Огноо"
          dataIndex=""
          key="date"
          render={(date: Payment_Transactions) =>
            moment(date.created_at).format("YYYY-MM-DD")
          }
        />
        <Column
          title="Дүн"
          dataIndex="amount"
          key="amount"
          render={(amount: Payment_Transactions) => formatPrice(amount)}
        />
        <Column
          title="E-barimt"
          dataIndex="ebarimt"
          key="ebarimt"
          render={(_, item: Payment_Transactions) => {
            return (
              <Button
                size="small"
                ghost
                style={{ color: "#cecece" }}
                onClick={() => handleShow(item)}
              >
                Харах
              </Button>
            );
          }}
        />
      </Table>
      {isSelected && (
        <Ebarimt isShow={isShow} setIsShow={setIsShow} id={isSelected} />
      )}
    </>
  );
};

export default History;
