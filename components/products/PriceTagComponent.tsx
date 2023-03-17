import { View, Text } from "react-native";
import React from "react";
import products from "../../styles/products";
export default function PriceTagComponent(props) {
  return (
    <View style={products.pricetag}>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>
        {props["price"]}{" "}
      </Text>
    </View>
  );
}
