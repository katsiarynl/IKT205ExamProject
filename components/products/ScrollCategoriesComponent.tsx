import React from "react";
import { Card } from "react-native-paper";
import { restaurantStyle } from "../../styles/restaurantsStyle";
import { Text } from "react-native-paper";
import { View, FlatList, Pressable, ScrollView } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../assets/star";
import products from "../../styles/products";
import ProductCategoryComponent from "./ProductCategoryComponent";
import ProductItemComponent from "./ProductItemComponent";
import { ScrollCategoriesComponent } from "../../types/product";
export default function ScrollCategoriesComponent(
  props: ScrollCategoriesComponent
) {
  console.log(props["menu"][0]["meals"]);
  return (
    <View style={products.productcategories}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
      >
        {props["menu"].map((item, index) => {
          return (
            <ProductCategoryComponent
              key={index}
              category={props["menu"][index]["category"]}
              products={props["menu"][index]["meals"]}
              allmeals={props["menu"]}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
