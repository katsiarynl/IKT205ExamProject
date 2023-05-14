import React from "react";
import StudentProvider from "./context";
import { UserProvider } from "./components/Auth/userContext";
import "react-native-gesture-handler";
import "expo-dev-client";

import { NavigationContainer } from "@react-navigation/native";
import StackNavigatorComponent from "./components/stacknavigator/StackNavigatorComponent";

export default function App() {
  return (
    <NavigationContainer>
      <StudentProvider>
        <UserProvider>
          <StackNavigatorComponent />
        </UserProvider>
      </StudentProvider>
    </NavigationContainer>
  );
}
