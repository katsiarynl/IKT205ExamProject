import { View, Text } from "react-native";
import React, { useContext } from "react";
import { Feather, AntDesign } from "@expo/vector-icons";
import cartstyle from "../../styles/cartstyles";
import IncreaseQuantity from "../../utilities/IncreaseItemQuantity";
import ChangeQuantityButton from "./ChangeQuantityButton";
import { StudentContext } from "../../context";
export default function QuantityComponent(props) {
  return (
    <View style={cartstyle.quantitystyle}>
      <ChangeQuantityButton sign="-" id={props.id} />
      <Text style={{ fontSize: 30, marginHorizontal: "5%" }}>
        {props.quantity}
      </Text>
      <ChangeQuantityButton sign="+" id={props.id} />
    </View>
  );
}
