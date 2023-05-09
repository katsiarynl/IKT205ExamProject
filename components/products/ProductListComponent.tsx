import React, { useState } from "react";
import { View, RefreshControl } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import products from "../../styles/products";
import { Product } from "../../types/productTypes";
import RestrauntComponent from "../restrauntdetails/RestrauntComponent";
import ProductItemComponent from "./ProductItemComponent";
import ScrollCategoriesComponent from "./ScrollCategoriesComponent";
import { useContext } from "react";
import { RestaurantContext } from "../../context";
import GETRestaurants from "../../utilities/GETRestaurants";
export default function ProductListComponent({ route }) {
  let { restaurant } = route.params;
  const { dispatch } = useContext(RestaurantContext);
  // console.log(item["menu"][1]["category"]);
  //https://blog.logrocket.com/using-react-usestate-object/

  const [Category, setCategory] = useState<string[]>(["String1", "all"]);
  const [refreshing, setRefreshing] = React.useState(false);

  //https://reactnative.dev/docs/refreshcontrol
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      GETRestaurants(dispatch);
      restaurant = route.params;
    }, 2000);
  }, []);

  return (
    <View style={{ flexDirection: "column" }}>
      <RestrauntComponent image={restaurant.image} />
      <ScrollCategoriesComponent
        menu={restaurant.menu}
        setCategory={setCategory}
      />

      <ScrollView
        style={products.scrollproducts}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
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
                      image={product.image}
                      restaurant={restaurant.name}
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
