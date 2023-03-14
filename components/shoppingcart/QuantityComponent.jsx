import { View, Text } from "react-native";
import React from "react";
import { Feather, AntDesign } from "@expo/vector-icons";
import cartstyle from "../../styles/cartstyles";

export default function QuantityComponent() {
  return (
    <View style={cartstyle.quantitystyle}>
      <Feather name="minus-circle" size={30} color="black" />
      <Text style={{ fontSize: 30, marginHorizontal: "5%" }}>05</Text>
      <AntDesign name="pluscircleo" size={30} color="black" />
    </View>
  );
}
