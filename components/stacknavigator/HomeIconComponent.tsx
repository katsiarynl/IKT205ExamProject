import React from "react";
import { DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { NavigationProfileSignOut } from "../../types/navigationTypes";
import { Feather } from "@expo/vector-icons";
export default function HomeIconComponent() {
  const navigation = useNavigation<NavigationProfileSignOut>();
  return (
    <DrawerItem
      icon={() => {
        return <Feather name="home" color={"blue"} size={25} />;
      }}
      label="Home"
      testID="HomeIcon"
      onPress={() => navigation.navigate("Home")}
    />
  );
}
