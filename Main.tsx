import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { StudentContext } from "./context";
import Dish from "./components/shoppingcart/Dish";
import { Pressable } from "react-native";
import { openBrowserAsync } from "expo-web-browser";
import GETBlogs from "./utilities/GETBlogs";

export default function Main() {
  const { dispatch } = useContext(StudentContext);

  return (
    <View style={styles.container}>
      <Dish />
      <Pressable
        onPress={() => {
          GETBlogs(dispatch);
        }}
      >
        <View style={{ backgroundColor: "grey", width: 200, height: 80 }}>
          <Text> Click</Text>
        </View>
      </Pressable>

      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
