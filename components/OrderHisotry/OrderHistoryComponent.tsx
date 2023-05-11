import { View, Text } from "react-native";
import React from "react";
import { orderHistorystyles } from "../../styles/orderstyles";
import OrderHisoryListComponent from "./OrderHisoryListComponent";
export default function OrderHistoryComponent() {
  return (
    <View style={orderHistorystyles.container}>
      <View style={orderHistorystyles.header}>
        <Text style={orderHistorystyles.title}> Order History</Text>
      </View>
      <OrderHisoryListComponent />
    </View>
  );
}
