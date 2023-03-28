import React, { useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import products from "../../styles/products";
import { Product } from "../../types/product";
import RestrauntComponent from "../restrauntdetails/RestrauntComponent";
import ProductItemComponent from "./ProductItemComponent";
import ScrollCategoriesComponent from "./ScrollCategoriesComponent";

export default function ProductListComponent({ route }) {
  const { restaurant } = route.params;
  // console.log(item["menu"][1]["category"]);
  //https://blog.logrocket.com/using-react-usestate-object/

  const [Category, setCategory] = useState<string[]>(["String1", "all"]);

  return (
    <View style={{ flexDirection: "column" }}>
      <RestrauntComponent />
      <ScrollCategoriesComponent
        menu={restaurant.menu}
        setCategory={setCategory}
      />

      <ScrollView style={products.scrollproducts}>
        <View style={products.productlist}>
          {restaurant.menu.map((category) => {
            return Category.includes(category["category"]) ||
              Category.includes("all") ? (
              <View>
                {category["meals"].map((product: Product) => {
                  return (
                    <ProductItemComponent
                      name={product.name}
                      price={product.price}
                      description={product.description}
                      _id={product["_id"]}
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
