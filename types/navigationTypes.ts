import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RestrauntItemComponentType } from "./restrauntTypes";
export type RootStackParamList = {
  navbar: undefined;
  products: {
    restaurant: RestrauntItemComponentType;
  };
  test: undefined;
  stripe: undefined;
};

export type NavigatorStripeParam = NativeStackNavigationProp<
  RootStackParamList,
  "stripe"
>;

export type NavigatorProductParam = NativeStackNavigationProp<
  RootStackParamList,
  "products"
>;
