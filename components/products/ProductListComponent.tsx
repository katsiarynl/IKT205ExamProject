import React, { useState } from "react";
import { View, Text } from "react-native";
import products from "../../styles/products";
import ScrollCategoriesComponent from "./ScrollCategoriesComponent";
import ProductItemComponent from "./ProductItemComponent";
import { ScrollView } from "react-native-gesture-handler";
export default function ProductListComponent({ route, navigation }) {
  const { item } = route.params;
  // console.log(item["menu"][1]["category"]);

  return (
    <View>
      <ScrollCategoriesComponent menu={item["menu"]} />
      <ScrollView style={products.scrollproducts}>
        <View style={products.productlist}>
          {item["menu"].map((item, index) => {
            return (
              <View>
                {item["meals"].map((item1, index) => {
                  {
                    console.log(item1);
                  }
                  return <ProductItemComponent productobject={item1} />;
                })}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
