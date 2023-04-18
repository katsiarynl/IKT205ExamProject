import React from "react";
import StudentProvider from "./context";
import { UserProvider } from "./components/Auth/userContext";
import GETPath from "./utilities/GETPath";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigatorComponent from "./components/stacknavigator/StackNavigatorComponent";

export default function App() {
  GETPath("gs://cooktogo-cec09.appspot.com/image17.jpg");
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
