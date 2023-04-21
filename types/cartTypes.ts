import { GeneralProduct } from "./productTypes";
export type ChangeQuantityButtonType = {
  _id: string;
  sign: string;
};

export interface CartComponentType extends GeneralProduct {
  quantity: number;
  image: string;
}
export interface CartItemComonentType extends GeneralProduct {
  quantity: number;
}
