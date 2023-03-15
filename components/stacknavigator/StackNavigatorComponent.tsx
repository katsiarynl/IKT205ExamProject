import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
const Stack = createStackNavigator();
import NavigatorBarComponent from "./NavigationBarComponent";
import CartComponent from "../shoppingcart/CartComponent";

export default function StackNavigatorComponent() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="lol" component={NavigatorBarComponent} />
    </Stack.Navigator>
  );
}
