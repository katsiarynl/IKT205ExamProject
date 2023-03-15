import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StudentProvider, { StudentContext } from "./context";
import Dish from "./components/shoppingcart/Dish";
import { Pressable } from "react-native";
import { openBrowserAsync } from "expo-web-browser";
import GETBlogs from "./utilities/GETBlogs";
import Main from "./Main";
import CartComponent from "./components/shoppingcart/CartComponent";
import StackNavigatorComponent from "./components/stacknavigator/StackNavigatorComponent";
import NavigatorBarComponent from "./components/stacknavigator/NavigationBarComponent";
import { NavigationContainer } from "@react-navigation/native";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
