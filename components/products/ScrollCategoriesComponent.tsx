import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import products from "../../styles/products";
import { ScrollCategoriesComponentType } from "../../types/product";
import ProductCategoryComponent from "./ProductCategoryComponent";
export default function ScrollCategoriesComponent(
  props: ScrollCategoriesComponentType
) {
  const cat = "all";
  return (
    <View style={products.productcategories}>
      <ScrollView horizontal={true}>
        {props["menu"].map((item, index) => {
          return (
            <ProductCategoryComponent
              key={index}
              setCategory={props.setCategory}
              category={item["category"]}
            />
          );
        })}
        <ProductCategoryComponent
          category={cat}
          setCategory={props.setCategory}
        />
      </ScrollView>
    </View>
  );
}
