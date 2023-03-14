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
export default function App() {
  return (
    <StudentProvider>
      {/* <CartComponent /> */}
      {/* <Main /> */}
    </StudentProvider>
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
