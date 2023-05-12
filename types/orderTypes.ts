import { GeneralProduct } from "./productTypes";
export type GeneralOrder = {
  order_date: string;
  orders: GeneralProductQ[];
};

export interface GeneralProductQ extends GeneralProduct {
  quantity?: string;
}
