import React, { useContext } from "react";
import { View, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "./userContext";
import { NavigationHome } from "../../types/navigationTypes";
import RemoveHisotry from "../../utilities/RemoveHistory";
import { RestaurantContext } from "../../context";
import empty_cart from "../../utilities/Empty_Cart";
import { DrawerItem } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
export const SignOut = () => {
  const navigator = useNavigation<NavigationHome>();

  const { setIsloggedIn, dispatchUser } = useContext(UserContext);
  const { setIsuserEmail } = useContext(UserContext);
  const { dispatch } = useContext(RestaurantContext);

  const handleSignOut = async () => {
    try {
      await axios.post("https://cook2go.herokuapp.com/singOut");
      await AsyncStorage.removeItem("AccessToken");
      await AsyncStorage.removeItem("userEmail");
      RemoveHisotry(dispatchUser);
      empty_cart(dispatch);

      setIsloggedIn(false);
      setIsuserEmail(false);
      navigator.navigate("Home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DrawerItem
      icon={() => {
        return <Feather name="log-out" color={"blue"} size={25} />;
      }}
      label="Sign Out"
      onPress={() => handleSignOut()}
    />
  );
};
