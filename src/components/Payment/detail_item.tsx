import * as React from "react";
import { Table, Row } from "antd";
import Link from "next/link";
import numeral from "numeral";
import "./style.less";
import { Payment_Details } from "~/generated/graphql";
import { getImageUrl, canLoadWebp } from "~/utils/helpers";

const { Column } = Table;

const formatPrice = (price: any) =>
  numeral(price)
    .format("0,0 $")
    .replace("$", "₮");
interface IProps {
  items: any[];
}
const DetailList = (props: IProps) => {
  const { items } = props;

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

  return (
    <Table
      rowKey="id"
      dataSource={items}
      pagination={false}
      size="small"
      style={{ fontSize: "12px" }}
      footer={() => (
        <div style={{ textAlign: "right" }}>
          {`Нийт дүн:
          ${
            items && items.length > 0
              ? formatPrice(
                  items.reduce<number>((a: number, b: any) => a + b.total, 0)
                )
              : 0
          }`}
        </div>
      )}
    >
      <Column
        title="Зураг"
        dataIndex="lastName"
        key="lastName"
        render={(_, item: Payment_Details) => {
          if (item.membership) {
            return (
              <Link href="/payment">
                <a>{`${item.membership && item.membership.name}`}</a>
              </Link>
            );
          } else if (item.package) {
            return (
              <Link href="/payment">
                <a>{`${item.package && item.package.name}`}</a>
              </Link>
            );
          }

          const content = (item && item.content) || null;
          if (!content) {
            return null;
          }
          const coverFile =
            content.files && content.files.length > 0 && content.files[0];
          const coverKey = coverFile && coverFile.file_id;

          return (
            <Link href={`/contents/${content.id}`}>
              <a>
                <img src={getImage(coverKey)} width="40" className="rounded" />
                {` ${content.name}`}
              </a>
            </Link>
          );
        }}
      />
      <Column
        title="Үнэ"
        dataIndex="price"
        key="price"
        render={(price: any) => formatPrice(price)}
      />
      <Column title="Тоо ширхэг" dataIndex="qty" key="qty" />
      <Column
        title="Дүн"
        dataIndex="total"
        key="total"
        render={(total: any) => formatPrice(total)}
      />
    </Table>
  );
};

export default DetailList;
