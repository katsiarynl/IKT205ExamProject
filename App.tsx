import React from "react";

import StudentProvider from "./context";

import { NavigationContainer } from "@react-navigation/native";
import StackNavigatorComponent from "./components/stacknavigator/StackNavigatorComponent";

export default function App() {
  return (
    <NavigationContainer>
      <StudentProvider>
        <StackNavigatorComponent />
        {/* <NavigatorBarComponent /> */}
        {/* <Main /> */}
        {/* <CartComponent /> */}
      </StudentProvider>
    </NavigationContainer>
  );
}
