import { useNavigation } from "@react-navigation/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { Pressable, SafeAreaView, ScrollView, View } from "react-native";
import { homesStyle } from "../../styles/homestyles";
import RestrauntItemComponent from "../restaurants/RestrauntItemComponent";
import { Search } from "../search/Search";
import { StudentContext } from "/Users/Kate/IKT205Project/IKT205FinalProject/context";
import { RestrauntItemComponentType } from "../../types/restraunt";
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
          {state.dishes.map((item: RestrauntItemComponentType, id) => {
            return (
              <Pressable
                onPress={() => navigator.navigate("products", { item })}
              >
                <RestrauntItemComponent
                  key={id}
                  name={item.name}
                  photos={item.photos}
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
