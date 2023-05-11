import { View, Text, StyleSheet } from "react-native";
import React from "react";
import products from "../../styles/products";
import { PriceTagType } from "../../types/productTypes";

export default function PriceTagComponent(props: PriceTagType) {
  return (
    <View style={styles.container}>
      <Text style={styles.price}>{props.price}</Text>
      <Text style={styles.currency}>NOK</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFA500", 
    borderRadius: 8,
    paddingHorizontal: 7,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    color: "#FFFFFF", 
    fontSize: 16,
    fontWeight: "bold",
  },
  currency: {
    color: "#FFFFFF", 
    fontSize: 12,
    marginLeft: 5,
  },
});
