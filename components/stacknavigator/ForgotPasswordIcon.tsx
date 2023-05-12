import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NavigationForgetPass } from "../../types/navigationTypes";
import { DrawerItem } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
export default function ForgotPasswordIcon() {
  const navigation = useNavigation<NavigationForgetPass>();
  return (
    <DrawerItem
      icon={() => {
        return <Feather name="key" color={"blue"} size={25} />;
      }}
      testID="OrderHistoryIcon"
      label="Forgot Password?"
      onPress={() => navigation.navigate("orderHistory")}
    />
  );
}
