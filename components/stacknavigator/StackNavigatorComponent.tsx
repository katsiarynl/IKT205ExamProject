import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import NavigatorBarComponent from "./NavigationBarComponent";
import CartComponent from "../shoppingcart/CartComponent";
import ProductListComponent from "../products/ProductListComponent";
import StripePaymentComponent from "../payment/StripePaymentComponent";
import { RootStackParamList } from "../../types/navigationTypes";

const Stack = createStackNavigator<RootStackParamList>();

export default function StackNavigatorComponent() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="navbar" component={NavigatorBarComponent} />
      <Stack.Screen name="products" component={ProductListComponent} />
      <Stack.Screen name="test" component={CartComponent} />
      <Stack.Screen name="stripe" component={StripePaymentComponent} />
    </Stack.Navigator>
  );
}
