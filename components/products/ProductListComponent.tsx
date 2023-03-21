import React, { useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import products from "../../styles/products";
import { Product } from "../../types/product";
import RestrauntComponent from "../restrauntdetails/RestrauntComponent";
import ProductItemComponent from "./ProductItemComponent";
import ScrollCategoriesComponent from "./ScrollCategoriesComponent";
//! the warning is also here
export default function ProductListComponent({ route, navigation }) {
  const { item } = route.params;
  // console.log(item["menu"][1]["category"]);
  //https://blog.logrocket.com/using-react-usestate-object/

  const [Category, setCategory] = useState<string[]>(["String1", "all"]);

  return (
    <View style={{ flexDirection: "column" }}>
      <RestrauntComponent />
      <ScrollCategoriesComponent menu={item.menu} setCategory={setCategory} />

      <ScrollView style={products.scrollproducts}>
        <View style={products.productlist}>
          {item["menu"].map((item) => {
            return Category.includes(item["category"]) ||
              Category.includes("all") ? (
              <View>
                {item["meals"].map((item1: Product) => {
                  {
                    console.log("------------");
                  }
                  return (
                    <ProductItemComponent
                      name={item1.name}
                      price={item1.price}
                      description={item1.description}
                      id={item1["_id"]}
                      product_object={item1}
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
