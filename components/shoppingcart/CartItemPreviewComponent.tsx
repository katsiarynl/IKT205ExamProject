import { View, Text } from "react-native";
import React from "react";
import QuantityComponent from "./QuantityComponent";
import { CartItemComonentType } from "../../types/cartTypes";

export default function CartItemPreviewComponent(props: CartItemComonentType) {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View style={{ flex: 1.6, paddingHorizontal: 6 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold", textAlign: "left" ,alignItems: "center", justifyContent: "center" }} numberOfLines={2}>
            {props.name}
          </Text>
        </View>
        <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
          <View style={{ backgroundColor: "#F2C94C", borderRadius: 150, padding: 7 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
              {props.price} NOK
            </Text>
          </View>
        </View>
      </View>
      <QuantityComponent quantity={props.quantity} _id={props._id} />
    </View>
  );
}
