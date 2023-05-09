import React from "react";
import RestaurantProvider from "./context";
import { UserProvider } from "./components/Auth/userContext";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import StackNavigatorComponent from "./components/stacknavigator/StackNavigatorComponent";

export default function App() {
  return (
    <NavigationContainer>
      <RestaurantProvider>
        <UserProvider>
          <StackNavigatorComponent />
        </UserProvider>
      </RestaurantProvider>
    </NavigationContainer>
  );
}
