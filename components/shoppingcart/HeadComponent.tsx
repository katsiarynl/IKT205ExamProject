import { AntDesign } from "@expo/vector-icons";

import { View, Text } from "react-native";
import React from "react";
import generalstyle from "../../styles/generalstyles";
import cartstyle from "../../styles/cartstyles";

export default function HeadComponent() {
  return (
    <View style={cartstyle.header}>
      <AntDesign
        name="left"
        size={24}
        color="black"
        style={generalstyle.lefty}
      />
      <Text style={generalstyle.generalTitle}>Cart</Text>
    </View>
  );
}
