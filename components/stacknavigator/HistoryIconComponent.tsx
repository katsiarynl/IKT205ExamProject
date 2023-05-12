import React from "react";
import { DrawerItem } from "@react-navigation/drawer";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NavigationProfileSignOut } from "../../types/navigationTypes";

export default function HistoryIconComponent() {
  const navigation = useNavigation<NavigationProfileSignOut>();
  return (
    <DrawerItem
      icon={() => {
        return <Feather name="shopping-bag" color={"blue"} size={25} />;
      }}
      testID="OrderHistoryIcon"
      label="Order History"
      onPress={() => navigation.navigate("orderHistory")}
    />
  );
}
