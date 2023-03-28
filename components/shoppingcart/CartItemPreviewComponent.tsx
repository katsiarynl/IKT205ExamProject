import { View, Text } from "react-native";
import React from "react";
import QuantityComponent from "./QuantityComponent";
export default function CartItemPreviewComponent(props) {
  return (
    <View
      style={{
        backgroundColor: "transparent",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <View
        style={{
          backgroundColor: "transparent",
          flexDirection: "row",
          flex: 1,
        }}
      >
        <View style={{ backgroundColor: "transparent", flex: 4 }}>
          <Text style={{ fontSize: 30 }}> {props.name}</Text>
        </View>
        <View
          style={{
            backgroundColor: "transparent",
            flex: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {props.price}
          </Text>
        </View>
      </View>
      <View style={{ flex: 3, backgroundColor: "#F4F4F8" }}>
        <Text style={{ fontSize: 18 }}>{props.description} </Text>
      </View>

      <QuantityComponent quantity={props.quantity} id={props.id} />
    </View>
  );
}
