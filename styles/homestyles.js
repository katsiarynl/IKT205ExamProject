import { StatusBar, StyleSheet, Platform } from "react-native";

export const homesStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: "4%",
    backgroundColor: "#fff",
    color: "blue",
  },
  restaurantList: {
    flex: 1,
    padding: "4%",
    backgroundColor: "#ffff",
  },
});
