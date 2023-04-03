import { View, Text } from "react-native";
import React from "react";
import products from "../../styles/products";
import { PriceTagType } from "../../types/productTypes";
export default function PriceTagComponent(props: PriceTagType) {
  return (
    <View style={products.pricetag}>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>{props.price}</Text>
    </View>
  );
}
