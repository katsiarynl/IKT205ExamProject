import React, { useContext } from "react";
import { View, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "./userContext";
import { NavigationHome } from "../../types/navigationTypes";

export const SignOut = () => {
  const navigator = useNavigation<NavigationHome>();
  const { sloggedIn, setIsloggedIn } = useContext(UserContext);

  const handleSignOut = async () => {
    try {
      await axios.post("https://cook2go.herokuapp.com/singOut");
      await AsyncStorage.removeItem("AccessToken");
      await AsyncStorage.removeItem("userEmail");

      setIsloggedIn(false);
      navigator.navigate("Home");
    } catch (error) {
      /* empty */
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Logout" onPress={handleSignOut}></Button>
    </View>
  );
};
