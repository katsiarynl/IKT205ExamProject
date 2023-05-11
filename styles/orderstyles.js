import { StatusBar, StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "./dimensions";

export const orderHistorystyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",

    flex: 1,
    margin: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",

    flex: 1,
    alignItems: "center",
  },
  orderitem: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 15,
    paddingTop: 10,
    paddingBottom: 5,
    paddingHorizontal: 5,
    shadowRadius: 3,
    shadowOpacity: 0.4,
  },
  orderdetails: {
    backgroundColor: "yellow",
    flex: 1,
    paddingTop: 30,
  },
  texttop: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
