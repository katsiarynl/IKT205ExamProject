import { GeneralProduct } from "./productTypes";
export type ChangeQuantityButtonType = {
  _id: string;
  sign: string;
};

export interface CartComponentType extends GeneralProduct {
  quantity: number;
}
