import {ScrollView,SafeAreaView,Platform,View, Text } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { homesStyle } from "../../styles/homestyles";
import { Search } from "../search/Search";
import {RestaurantsInfo } from "../restaurants/restaurants-info";

export default function HomeComponent() {
  return (
   <>
   <SafeAreaView style= {homesStyle.container}>
    <View style= {homesStyle.search}>
    <Search/>
    </View>
    <View style={homesStyle.restaurantList}>
     
    <RestaurantsInfo/>         

    </View>
   </SafeAreaView>
   <ExpoStatusBar style="auto"/>
   
   
   
   </>
  );
}
