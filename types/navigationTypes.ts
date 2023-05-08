import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import type { RestrauntItemComponentType } from "./restrauntTypes";
export type RootStackParamList = {
  navbar: undefined;
  products: {
    restaurant: RestrauntItemComponentType;
  };
  test: undefined;
  stripe: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined;
  ForgetPass: undefined;
  SignOut: undefined;
  orderHistory: undefined;
  ItemProfile: undefined;
  AddressForm: undefined;
};

export type NavigatorStripeParam = NativeStackNavigationProp<
  RootStackParamList,
  "stripe"
>;

export type NavigatorProductParam = NativeStackNavigationProp<
  RootStackParamList,
  "products"
>;

export type NavigationSignOut = NativeStackNavigationProp<
  RootStackParamList,
  "SignUp"
>;

export type NavigationSignIn = NativeStackNavigationProp<
  RootStackParamList,
  "SignIn"
>;

export type NavigationHome = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export type NavigationForgetPass = NativeStackNavigationProp<
  RootStackParamList,
  "ForgetPass"
>;
export type NavigationProfileSignOut = NativeStackNavigationProp<
  RootStackParamList,
  "SignOut"
>;

export type NavigationProfileAddressForm = NativeStackNavigationProp<
  RootStackParamList,
  "AddressForm"
>;
