import { Product } from "./../types/productTypes";
import { ActionsType } from "../context";
export interface PostOrderCallback {
  (order: any, id: string): object;
}

export interface CredentilsCallBackType {
  (): Promise<{ email?: any; token?: any }>;
}

export interface EmptyCartCallback {
  (dispatch: React.Dispatch<ActionsType>): any;
}

export interface GetHistoryCallback {
  (id: string, dispatch: React.Dispatch<ActionsType>): any;
}

export interface POSTEmailCallback {
  (cartdata: Product[], mail: string): any;
}
