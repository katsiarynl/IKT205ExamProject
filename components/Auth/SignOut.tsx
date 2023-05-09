import React, { useContext } from "react";
import { View, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "./userContext";
import { NavigationHome } from "../../types/navigationTypes";
import RemoveHisotry from "../../utilities/RemoveHistory";

import { GoogleSignin } from "@react-native-google-signin/google-signin";

export const SignOut = () => {
  const navigator = useNavigation<NavigationHome>();

  const { setIsloggedIn, dispatchUser } = useContext(UserContext);
  const { setIsuserEmail } = useContext(UserContext);

  const handleSignOut = async () => {
    try {
      await axios.post("https://cook2go.herokuapp.com/singOut");
      await AsyncStorage.removeItem("AccessToken");
      await AsyncStorage.removeItem("userEmail");

      RemoveHisotry(dispatchUser);
      await GoogleSignin.signOut();
      setIsloggedIn(false);
      setIsuserEmail(false);
      navigator.navigate("Home");
    } catch (error) {
      /* empty */
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Logout" onPress={handleSignOut}></Button>
    </View>
  );
};
