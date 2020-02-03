export interface IBasketItem {
  id: string;
  item_id: number;
  name: string;
  type: "content" | "membership" | "package";
  qty: number;
  price: number;
  total: number;
}

interface IBasketState {
  items: IBasketItem[];
  count: number;
}

const initialItems =
  typeof localStorage === "object" && localStorage.getItem("basketItems")
    ? JSON.parse(localStorage.getItem("basketItems") || "{}")
    : [];

export const initialState: IBasketState = {
  count: initialItems.reduce((a: number, b: IBasketItem) => a + b.qty, 0),
  items: initialItems
};

export const reducer = (state: any, action: any): IBasketState => {
  let items: IBasketItem[] = state.items || [];
  let count = 0;
  switch (action.type) {
    case "ADD":
      const existingItem = items.find(
        (item: IBasketItem) =>
          item.item_id === action.data.item_id && item.type === action.itemType
      );
      if (!existingItem) {
        items.push(action.data);
      }
      localStorage.setItem("basketItems", JSON.stringify(items));
      count = items.reduce((a: number, b: IBasketItem) => a + b.qty, 0);

      return {
        ...state,
        count,
        items
      };
    case "REMOVE":
      const index = items.findIndex(
        (item: IBasketItem) =>
          item.item_id !== action.item_id && item.type === action.itemType
      );
      items.splice(index - 1, 1);
      localStorage.setItem("basketItems", JSON.stringify(items));
      count = items.reduce((a: number, b: IBasketItem) => a + b.qty, 0);

      return {
        ...state,
        count,
        items
      };
    case "CLEAR":
      localStorage.removeItem("basketItems");
      items = [];
      return {
        ...state,
        count: 0,
        items
      };
    case "CHANGE_QTY":
      const existingQtyItem = items.find(
        (item: IBasketItem) =>
          item.item_id === action.item.item_id && item.type === action.itemType
      );
      if (existingQtyItem && action.itemType === "membership") {
        existingQtyItem.qty = action.item.qty;
        existingQtyItem.total = action.item.total;
      }
      localStorage.setItem("basketItems", JSON.stringify(items));
      count = items.reduce((a: number, b: IBasketItem) => a + b.qty, 0);

      return {
        ...state,
        count,
        items
      };
    default:
      throw new Error();
  }
};
