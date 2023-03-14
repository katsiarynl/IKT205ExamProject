import { StyleSheet } from "react-native";
import { windowWidth, windowHeight } from "./dimensions";
const generalstyle = StyleSheet.create({
  generalTitle: {
    fontSize: 40,
    paddingLeft: windowWidth * 0.05,
    paddingTop: windowHeight * 0.04,
    fontWeight: "bold",
    color: "#1B1B1B",
  },
  lefty: {
    paddingLeft: windowWidth * 0.02,
    paddingTop: windowHeight * 0.04,
    fontWeight: "bold",
    color: "white",
  },
});

export default generalstyle;
