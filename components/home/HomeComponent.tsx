import {
  ScrollView,
  SafeAreaView,
  Platform,
  View,
  Text,
  Pressable,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { homesStyle } from "../../styles/homestyles";
import { Search } from "../search/Search";
import { RestaurantsInfo } from "../restaurants/restaurants-info";
import { useNavigation } from "@react-navigation/native";
import { StudentContext } from "/Users/Kate/IKT205Project/IKT205FinalProject/context";
import RestrauntItemComponent from "../restaurants/RestrauntItemComponent";
import GETBlogs from "../../utilities/GETBlogs";
import ProductListComponent from "../products/ProductListComponent";
export default function HomeComponent() {
  const navigator = useNavigation();
  const { dispatch, state } = useContext(StudentContext);
  console.log(state);

  return (
    <>
      <SafeAreaView style={homesStyle.container}>
        <View style={homesStyle.search}>
          <Search />
        </View>
        <ScrollView style={homesStyle.restaurantList}>
          {state.dishes.map((item, id) => {
            return (
              <Pressable
                onPress={() => navigator.navigate("products", { item })}
              >
                <RestrauntItemComponent
                  key={id}
                  name={item.name}
                  image={item.photos}
                  address={item.address}
                  rating={item.rating}
                />
              </Pressable>
            );
          })}
        </ScrollView>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}
