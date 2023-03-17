import { StyleSheet } from "react-native";
import { windowWidth, windowHeight } from "./dimensions";

const products = StyleSheet.create({
  productcategories: {
    backgroundColor: "blue",
    height: "12%",
    paddingTop: "15%",
    paddingHorizontal: "5%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: "5%",
  },
  categoryitem: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.038,
    justifyContent: "center",
    alignItems: "right",
  },
  productlist: {
    marginHorizontal: windowWidth * 0.04,
    height: windowHeight,
  },
  productitem: {
    height: windowHeight * 0.25,
    marginBottom: "5%",
  },
  scrollproducts: {
    height: windowHeight,
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
    borderRadius: "15%",
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth * 0.25,
    height: windowHeight * 0.05,
  },
  pricetag: {},
});

export default products;
