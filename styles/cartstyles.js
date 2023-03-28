import { StyleSheet } from "react-native";
import { windowWidth, windowHeight } from "./dimensions";

const cartstyle = StyleSheet.create({
  scrollStyle: {
    backgroundColor: "#E6E6EA",
    paddingTop: "5%",
    height: windowHeight * 0.7,
  },
  cartItem: {
    backgroundColor: "#F4F4F8",
    marginHorizontal: windowWidth * 0.05,
    height: windowHeight * 0.2,
    marginBottom: "5%",
    borderRadius: "15%",
    flexDirection: "row",
  },
  totalorder: {
    marginTop: "5%",
    marginBottom: "2%",
    backgroundColor: "white",
    marginHorizontal: windowWidth * 0.05,
    height: windowHeight * 0.095,
    borderRadius: "15%",
    flexDirection: "row",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF7878",
  },
  cartItemPreview: {
    flex: 1,
  },
  quantitystyle: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center",
    flex: 2,
    alignItems: "center",
  },
  checkoutbutton: {
    backgroundColor: "#FF7878",
    borderRadius: "5% ",
    height: "65%",
    width: "92%",
    alignItems: "center",
    justifyContent: "center",
  },
  changequantitybutton: {
    backgroundColor: "orange",
    width: "35%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10%",
  },
});

export default cartstyle;
