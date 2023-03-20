import { StyleSheet } from "react-native";
import { windowWidth, windowHeight } from "./dimensions";
const restrauntInfoStyles = StyleSheet.create({
  restrauntview: {
    paddingTop: "13%",
    height: windowHeight * 0.4,
    margin: -5,
  },
  restrauntdescription: {
    backgroundColor: "#ffff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flex: 1,
  },
});

export default restrauntInfoStyles;
