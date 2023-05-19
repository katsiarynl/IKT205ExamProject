import { useNavigation } from "@react-navigation/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  View,
  RefreshControl,
  Text,
} from "react-native";
import { homesStyle } from "../../styles/homestyles";
import RestrauntItemComponent from "../restaurants/RestrauntItemComponent";
import { Search } from "../search/Search";
import { RestaurantContext } from "../../context";
import { ActivityIndicator } from "react-native-paper";

import { RestrauntItemComponentType } from "../../types/restrauntTypes";
import { NavigatorProductParam } from "../../types/navigationTypes";
import GETRestaurants from "../../utilities/GETRestaurants";
import { activeStyle } from "../../styles/activeStyle";

import { UserContext } from "../Auth/userContext";

export default function HomeComponent() {
  const { navigate } = useNavigation<NavigatorProductParam>();
  const { state, dispatch } = useContext(RestaurantContext);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const { isLoading, setIsLoading } = useContext(UserContext);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setIsLoading(true);
    setTimeout(() => {
      setRefreshing(false);
      setIsLoading(false);
      GETRestaurants(dispatch);
    }, 2000);
  }, []);

  return (
    <>
      <SafeAreaView style={homesStyle.container}>
        <View style={homesStyle.search}>
          <Search  />
        </View>
        {isLoading ? (
          <View style={activeStyle.constiner}>
            <ActivityIndicator animating={true} size={60} />
            <Text style={activeStyle.titleText}>Loading....</Text>
          </View>
        ) : (
          <ScrollView
            style={homesStyle.restaurantList}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            {state.restraunts.map(
              (restaurant: RestrauntItemComponentType, id) => {
                return (
                  <Pressable
                    onPress={() => navigate("products", { restaurant })}
                  >
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
        )}
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}
