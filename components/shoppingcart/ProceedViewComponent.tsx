import { View } from "react-native";
import React from "react";
import cartstyle from "../../styles/cartstyles";
import TotalOrdersComponent from "./TotalOrdersComponent";
import CheckoutButtonComponent from "./CheckoutButtonComponent";
export default function ProceedViewComponent() {
  return (
    <View style={cartstyle.totalorder}>
      <TotalOrdersComponent />

      <CheckoutButtonComponent />
    </View>
  );
}
