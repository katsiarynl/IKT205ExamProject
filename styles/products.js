import { StyleSheet } from "react-native";
import { windowWidth, windowHeight } from "./dimensions";

const products = StyleSheet.create({
  productcategories: {
    backgroundColor: "#CDCDCD",
    height: "7%",
    paddingTop: "1%",
    paddingHorizontal: "5%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: "5%",
  },
  categoryitem: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.038,
    justifyContent: "center",

    backgroundColor: "white",
  },
  productlist: {
    marginHorizontal: windowWidth * 0.04,
  },
  productitem: {
    height: windowHeight * 0.25,
    marginBottom: "5%",
  },
  scrollproducts: {
    marginTop: "1%",
    height: "50%",
  },
  coverStyleProductItem: {
    backgroundColor: "#D9D9D9",
    padding: "1%",
  },
  viewProductItem: {
    flexDirection: "row",
    backgroundColor: "transparent",
    height: "100%",
  },
  productDescription: {
    backgroundColor: "yellow",
    flex: 1,
  },
  addTocartButton: {
    borderRadius: 15,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth * 0.25,
    height: windowHeight * 0.05,
  },
  pricetag: {},
  imagestyle: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  add_to_cart_position: {
    flex: 1,
    alignItems: "center",
  },
});

export default products;
