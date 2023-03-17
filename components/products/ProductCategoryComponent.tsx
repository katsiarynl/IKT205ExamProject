import React from "react";
import { Card } from "react-native-paper";
import { restaurantStyle } from "../../styles/restaurantsStyle";
import { Text } from "react-native-paper";
import { View, FlatList, Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../assets/star";
import products from "../../styles/products";
import { ScrollView } from "react-native";
import ProductItemComponent from "./ProductItemComponent";
import { Product } from "../../types/product";
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
            console.log(props["category"]);
            console.log(props["setProducts"]);
            console.log(props["products"]);
            console.log(props["products"]);
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
