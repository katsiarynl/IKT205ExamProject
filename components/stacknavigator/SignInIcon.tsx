import { View, Text } from "react-native";
import React from "react";
import { DrawerItem } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NavigationProfileSignOut } from "../../types/navigationTypes";
export default function SignInIcon() {
  const navigation = useNavigation<NavigationProfileSignOut>();
  return (
    <DrawerItem
      icon={() => {
        return <Feather name="log-in" color={"blue"} size={25} />;
      }}
      label="Sign In "
      testID="SignInIcon"
      onPress={() => navigation.navigate("SignIn")}
    />
  );
}
