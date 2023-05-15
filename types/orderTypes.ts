import { Product } from "./../types/productTypes";
export type GeneralOrder = {
  order_date: string;
  orders: Product[];
};
