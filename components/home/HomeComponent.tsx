import { useNavigation } from "@react-navigation/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useContext, useEffect } from "react";
import { Pressable, SafeAreaView, ScrollView, View } from "react-native";
import { homesStyle } from "../../styles/homestyles";
import RestrauntItemComponent from "../restaurants/RestrauntItemComponent";
import { Search } from "../search/Search";
import { StudentContext } from "../../context";

import { RestrauntItemComponentType } from "../../types/restrauntTypes";
import { NavigatorProductParam } from "../../types/navigationTypes";

export default function HomeComponent() {
  const { navigate } = useNavigation<NavigatorProductParam>();
  const { state } = useContext(StudentContext);

  return (
    <>
      <SafeAreaView style={homesStyle.container}>
        <View style={homesStyle.search}>
          <Search />
        </View>
        <ScrollView style={homesStyle.restaurantList}>
          {state.restraunts.map(
            (restaurant: RestrauntItemComponentType, id) => {
              return (
                <Pressable onPress={() => navigate("products", { restaurant })}>
                  <RestrauntItemComponent
                    key={id}
                    name={restaurant.name}
                    image={restaurant.image}
                    address={restaurant.address}
                    rating={restaurant.rating}
                  />
                </Pressable>
              );
            }
          )}
        </ScrollView>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}
