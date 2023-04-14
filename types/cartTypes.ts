import { Product } from "./productTypes";
export type ChangeQuantityButtonType = {
  _id: string;
  sign: string;
};

export interface CartComponentType extends Product {
  quantity: number;
  image: string;
}
