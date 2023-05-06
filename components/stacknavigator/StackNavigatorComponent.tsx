import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import NavigatorBarComponent from "./NavigationBarComponent";
import CartComponent from "../shoppingcart/CartComponent";
import ProductListComponent from "../products/ProductListComponent";
import StripePaymentComponent from "../payment/StripePaymentComponent";
import { RootStackParamList } from "../../types/navigationTypes";

import { SignIn } from "../Auth/SignIn";
import { SignUp } from "../Auth/SignUp";
import { SignOut } from "../Auth/SignOut";

const Stack = createStackNavigator<RootStackParamList>();
import { ForgetPass } from "../Auth/ForgetPass";
import { Drawercontent } from "../stacknavigator/Drawercontent";
import OrderHistoryComponent from "../OrderHisotry/OrderHistoryComponent";
import OrderItemComponent from "../OrderHisotry/OrderItemComponent";

export default function StackNavigatorComponent() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="navbar" component={NavigatorBarComponent} />
      <Stack.Screen name="products" component={ProductListComponent} />
      <Stack.Screen name="test" component={CartComponent} />
      <Stack.Screen name="stripe" component={StripePaymentComponent} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignOut" component={SignOut} />
      <Stack.Screen name="ForgetPass" component={ForgetPass} />
      <Stack.Screen name="ItemProfile" component={Drawercontent} />
      <Stack.Screen name="orderHistory" component={OrderHistoryComponent} />
    </Stack.Navigator>
  );
}
