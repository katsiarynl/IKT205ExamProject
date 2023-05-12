import { View, Text } from "react-native";
import React from "react";
import { GeneralRestaurant } from "../../types/restrauntTypes";

export default function OrderDetailsItemComponent(props: GeneralRestaurant) {
  return (
    <View>
      <Text>{props.name}</Text>
      <Text> {props.description}</Text>
    </View>
  );
}
