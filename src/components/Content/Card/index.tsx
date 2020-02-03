import * as React from "react";
import Link from "next/link";
import { Rate } from "antd";
import numeral from "numeral";
import Cover from "~/components/Content/Cover";
import "./style.less";

const Card = ({ content }: any) => {
  const renderPrice = (data: any) => {
    let price = data.price;
    let payment_type = data.payment_type;

    if (data.prices && data.prices.length > 0) {
      const tempPrices = data.prices[0];
      price = tempPrices.price;
      payment_type = tempPrices.payment_type;
    }

    switch (payment_type) {
      case "free":
        return "Үнэгүй";
      case "membership":
        return "Гишүүнчлэл";
      default:
        return numeral(price)
          .format("0,0 $")
          .replace("$", "₮");
    }
  };

  const coverFile =
    content.files && content.files.length > 0 && content.files[0];
  const coverKey = (coverFile && coverFile.file_id) || content.cover;
  const bucket =
    (coverFile && coverFile.file && coverFile.file.bucket) || content.bucket;

  return (
    <div className="content-card">
      <Link href={`/contents/${content.id}`} prefetch={false}>
        <a>
          <Cover bucket={bucket} fileKey={coverKey} alt={content.name} />
        </a>
      </Link>
      <div className="content-card-desc">
        <h2>{content.name}</h2>
        <Rate
          value={
            (content &&
              content.reviews_aggregate &&
              content.reviews_aggregate.aggregate &&
              content.reviews_aggregate.aggregate.avg &&
              content.reviews_aggregate.aggregate.avg.rate) ||
            content.average_rate ||
            0
          }
          disabled
          allowHalf
        />
        <div className="price">{renderPrice(content)}</div>
      </div>
    </div>
  );
};

export default Card;
