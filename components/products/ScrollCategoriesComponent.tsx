import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import products from "../../styles/products";
import { ScrollCategoriesComponentType } from "../../types/product";
import ProductCategoryComponent from "./ProductCategoryComponent";
export default function ScrollCategoriesComponent(
  props: ScrollCategoriesComponentType
) {
  console.log(props["menu"][0]["meals"]);

  const func = (val) => {
    console.log(val);
  };
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
              setProducts={func}
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
