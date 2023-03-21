import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
const Stack = createStackNavigator();
import NavigatorBarComponent from "./NavigationBarComponent";

import ProductListComponent from "../products/ProductListComponent";

export default function StackNavigatorComponent() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="lol" component={NavigatorBarComponent} />
      <Stack.Screen name="products" component={ProductListComponent} />
    </Stack.Navigator>
  );
}
