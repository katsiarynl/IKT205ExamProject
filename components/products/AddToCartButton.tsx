import { View, Text, Pressable } from "react-native";
import React from "react";
import products from "../../styles/products";
export default function AddToCartButton() {
  return (
    <View>
      <Pressable>
        <View style={products.addTocartButton}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Add To Cart </Text>
        </View>
      </Pressable>
    </View>
  );
}
