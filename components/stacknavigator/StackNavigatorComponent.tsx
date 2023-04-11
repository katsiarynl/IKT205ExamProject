import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import NavigatorBarComponent from "./NavigationBarComponent";
import CartComponent from "../shoppingcart/CartComponent";
import ProductListComponent from "../products/ProductListComponent";
import StripePaymentComponent from "../payment/StripePaymentComponent";
import { RootStackParamList } from "../../types/navigationTypes";

import { SignIn } from "../Auth/SignIn";
import { SignUp } from "../Auth/SignUp";
const Stack = createStackNavigator<RootStackParamList>();

export default function StackNavigatorComponent() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="navbar" component={NavigatorBarComponent} />
      <Stack.Screen name="products" component={ProductListComponent} />
      <Stack.Screen name="test" component={CartComponent} />
      <Stack.Screen name="stripe" component={StripePaymentComponent} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
