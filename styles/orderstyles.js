import { StatusBar, StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "./dimensions";
export const orderHistorystyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "yellow",
    flex: 1,
    margin: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "green",
    flex: 1,
    alignItems: "center",
  },
  orderitem: {
    backgroundColor: "orange",
    margin: 10,
    borderRadius: 15,
    paddingTop: 30,
    paddingBottom: 20,
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
