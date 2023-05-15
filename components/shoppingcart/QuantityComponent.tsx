import React from "react";
import { Text, View } from "react-native";
import cartstyle from "../../styles/cartstyles";
import ChangeQuantityButton from "./ChangeQuantityButton";
export default function QuantityComponent(props) {
  return (
    <View style={cartstyle.quantitystyle}>
      <ChangeQuantityButton sign="-" _id={props._id } />
      <Text style={{ fontSize: 30, marginHorizontal: "5%" }}>
     {props.quantity}
     </Text>
      <ChangeQuantityButton sign="+" _id={props._id} />
    </View>
  );
}
