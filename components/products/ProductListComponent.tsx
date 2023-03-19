import React, { useState, useRef } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import products from "../../styles/products";
import ProductItemComponent from "./ProductItemComponent";
import ScrollCategoriesComponent from "./ScrollCategoriesComponent";
import { Product } from "../../types/product";
//! the warning is also here
export default function ProductListComponent({ route, navigation }) {
  const { item } = route.params;
  // console.log(item["menu"][1]["category"]);
  //https://blog.logrocket.com/using-react-usestate-object/

  const [Category, setCategory] = useState<string[]>(["String1", "all"]);

  const count = useRef(0);

  return (
    <View>
      <ScrollCategoriesComponent menu={item.menu} setCategory={setCategory} />
      <ScrollView style={products.scrollproducts}>
        <View style={products.productlist}>
          {item["menu"].map((item) => {
            console.log(Category.includes(item["category"]));
            return Category.includes(item["category"]) ||
              Category.includes("all") ? (
              <View>
                {item["meals"].map((item1: Product, index) => {
                  {
                    console.log("------------");
                  }
                  return (
                    <ProductItemComponent
                      name={item1.name}
                      price={item1.price}
                      description={item1.description}
                    />
                  );
                })}
              </View>
            ) : (
              <View></View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
