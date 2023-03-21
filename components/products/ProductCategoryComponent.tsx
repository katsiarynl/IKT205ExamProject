import React from "react";
import { Pressable, View } from "react-native";
import { Card, Text } from "react-native-paper";
import products from "../../styles/products";
import { ProductCategoryComponentType } from "../../types/product";
// !100% the root of the problem
export default function ProductCategoryComponent(
  props: ProductCategoryComponentType
) {
  return (
    <View>
      <Pressable
        style={{ padding: 10 }}
        onPress={() => {
          props.category == "all"
            ? props.setCategory(["all"])
            : props.setCategory([props.category]);
        }}
      >
        <Card style={products.categoryitem}>
          <Text style={{ fontWeight: "bold" }}>{props["category"]}</Text>
        </Card>
      </Pressable>
    </View>
  );
}
