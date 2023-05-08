import { View, Text } from "react-native";
import React from "react";

export default function OrderDetailsItemComponent(props) {
  return (
    <View>
      <Text>{props.name}</Text>
      <Text> {props.description}</Text>
    </View>
  );
}
