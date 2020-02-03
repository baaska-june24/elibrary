import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Table, Button, notification } from "antd";
import Link from "next/link";
import numeral from "numeral";
import {
  Get_List_ContentsQuery,
  Get_List_ContentsQueryVariables
} from "~/generated/graphql";
import { GET_LIST_CONTENTS } from "~/queries/contents.graphql";
import { initialState, reducer, IBasketItem } from "~/reducer/basket";
import { getImageUrl, canLoadWebp } from "~/utils/helpers";
import UserContext from "~/context";
import "./style.less";
import useMedia from "use-media";

const { Column } = Table;

const formatPrice = (price: number) =>
  numeral(price)
    .format("0,0 $")
    .replace("$", "₮");
interface IProps {
  isPayPressed: boolean;
}

const CardList = (props: IProps) => {
  const { isPayPressed } = props;
  const isMobileScreen = useMedia({ maxWidth: 767 });
  const [user]= React.useContext(UserContext);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const { data } = useQuery<
    Get_List_ContentsQuery,
    Get_List_ContentsQueryVariables
  >(GET_LIST_CONTENTS, {
    variables: {
      where: {
        id: {
          _in: state && state.items ? state.items.map(item => item.item_id) : []
        }
      }
    }
  });

  const contents = data && data.contents;

  const getImage = (fileKey: string, bucket: string = "cdn.esan.mn") => {
    const coverImageRequest = JSON.stringify({
      bucket,
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

  const handleDelete = async (e: React.MouseEvent, item: IBasketItem) => {
    if (user) {
      {
        dispatch({
          itemType: "content",
          item_id: item.item_id,
          type: "REMOVE"
        });
        notification.success({
          message: "Амжилттай устгалаа!",
          placement: "bottomRight"
        });
      }
    }
  };

  const totalAmount =
    (state.items &&
      state.items.reduce<number>((a: number, b: any) => a + b.total, 0)) ||
    0;

  return (
    <Table
      rowKey="id"
      dataSource={state.items}
      pagination={false}
      size="small"
      style={{ fontSize: "12px" }}
      footer={() => (
        <div style={{ textAlign: "right" }}>
          {`Нийт дүн: ${formatPrice(totalAmount)}`}
        </div>
      )}
    >
      <Column
        title="Нэр"
        dataIndex="name"
        key="name"
        render={(_, item: IBasketItem) => {
          const { item_id } = item;

          if (item.type !== "content") {
            return (
              <Link href="/payment">
                <a>{`${item.name}`}</a>
              </Link>
            );
          }
          const content =
            item.type === "content" &&
            (contents || []).find(c => c.id === item_id);
          if (!content) {
            return null;
          }
          const coverFile =
            content.files && content.files.length > 0 && content.files[0];
          const coverKey = coverFile && coverFile.file_id;
          return (
            <Link href={`/contents/${content.id}`}>
              <a>
                <img
                  src={getImage(coverKey, coverFile.file.bucket)}
                  width="40"
                  className="rounded"
                />
                {` ${content.name}`}
              </a>
            </Link>
          );
        }}
      />
      {!isMobileScreen && (
        <Column
          title="Үнэ"
          dataIndex="price"
          key="price"
          render={(price: number) => formatPrice(price)}
        />
      )}
      {!isMobileScreen && (
        <Column title="Тоо ширхэг" dataIndex="qty" key="qty" />
      )}
      <Column
        title="Дүн"
        dataIndex="total"
        key="total"
        render={(total: number) => formatPrice(total)}
      />
      (
      {isPayPressed ? null : (
        <Column
          title="#"
          key="action"
          render={(_, item: IBasketItem) => (
            <Button
              // shape="circle-outline"
              size="small"
              type="danger"
              icon="minus"
              onClick={e => handleDelete(e, item)}
            />
          )}
        />
      )}
      )
    </Table>
  );
};

export default CardList;
