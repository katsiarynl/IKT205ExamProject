import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
const Stack = createStackNavigator();
import NavigatorBarComponent from "./NavigationBarComponent";
import CartComponent from "../shoppingcart/CartComponent";
import ProductListComponent from "../products/ProductListComponent";
import StripePaymentComponent from "../payment/StripePaymentComponent";
import StripeNavigate from "../payment/StripeNavigate";
export default function StackNavigatorComponent() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="lol" component={NavigatorBarComponent} />
      <Stack.Screen name="products" component={ProductListComponent} />
      <Stack.Screen name="test" component={CartComponent} />
      <Stack.Screen name="stripe" component={StripePaymentComponent} />
      <Stack.Screen name="stripenavigate" component={StripeNavigate} />
    </Stack.Navigator>
  );
}
