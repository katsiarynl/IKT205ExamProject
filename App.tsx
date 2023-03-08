import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StudentProvider from "./context";
import Dish from "./components/Dish";
import PUTBlog from "./utilities/PUTBlog";
import { useEffect } from "react";
import GETBlogs from "./utilities/GETBlogs";

// const GETBlogs = fetch("http://10.0.0.9:5000/blogs");

export default function App() {
  //GETBlogs("64066f663a00a4d8600624a7r");
  // useEffect(() => {
  //   console.log("GETBlogs");
  //   // GETBlogs();
  // }, []);

  return (
    <StudentProvider>
      <View style={styles.container}>
        <Dish />
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
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
