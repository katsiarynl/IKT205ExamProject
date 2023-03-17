import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { Card, Text } from "react-native-paper";
import products from "../../styles/products";
import { ProductCategoryComponentType } from "../../types/product";

export default function ProductCategoryComponent(
  props: ProductCategoryComponentType
) {
  return (
    <View>
      <View style={{ padding: 10 }}>
        <Pressable
          onPress={() => {
            console.log("--------------");
            // console.log(props["category"]);
            console.log(props.products);
            props.setProducts(false);
            // props["setProducts"](props["products"]);
            // console.log(props["products"]);
            // console.log(props["products"]);
          }}
        >
          <Card style={products.categoryitem}>
            <Text style={{ fontWeight: "bold" }}>{props["category"]}</Text>
          </Card>
        </Pressable>
      </View>
    </View>
  );
}
