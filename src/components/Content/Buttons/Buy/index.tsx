import * as React from "react";
import Button from "~/components/Button";
import { Icon, notification } from "antd";
import UserContext from "~/context";
import { initialState, reducer } from "~/reducer/basket";
import { EsanMetrics } from "~/utils/analytics";
interface IProps {
  content: any;
}

export default ({ content }: IProps) => {
  const [, dispatch] = React.useReducer(reducer, initialState);
  const [user]= React.useContext(UserContext);
  const [isLoading, setIsLoading] = React.useState();
  const type = "content";

  const handlePaySubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (user) {
      const { price } = content;

      const itemData = {
        discount: 0,
        id: `${type}_${content.id}`,
        item_id: content.id,
        name: content.name,
        price,
        qty: 1,
        total: price,
        type
      };
      dispatch({ type: "ADD", itemType: type, data: itemData });
      EsanMetrics.collectEvent({
        action: "content_basket_add",
        content: content.id,
        item_data: itemData
      });

      notification.success({
        btn: (
          <Button type="primary" href={`/payment`}>
            Төлбөр төлөх
          </Button>
        ),
        description: `Номын нэр: ${content.name}`,
        duration: 3,
        key: "add-cart-notification",
        message: "Таны сагсанд амжилттай нэмэгдлээ!",
        placement: "bottomRight"
      });
    } else {
      notification.warn({
        message: "Зөвхөн нэвтэрсэн хэрэглэгч хадгалах боломжтой!"
      });
    }
    setIsLoading(false);
  };
  return (
    <Button
      type="primary"
      loading={isLoading}
      style={{ marginRight: "1rem", marginBottom: "1rem" }}
      onClick={handlePaySubmit}
    >
      <Icon type="shopping-cart" /> Сагсанд нэмэх
    </Button>
  );
};
