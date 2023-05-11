import { StyleSheet } from "react-native";
import { windowHeight } from "./dimensions";
const restrauntInfoStyles = StyleSheet.create({
  restrauntview: {
    paddingTop: "13%",
    height: windowHeight * 0.4,
    margin: -5,
  },
  restrauntdescription: {
    backgroundColor: "#ffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flex: 1,
    paddingTop: "-5%",
    paddingHorizontal: "2%",
  },
});

export default restrauntInfoStyles;
