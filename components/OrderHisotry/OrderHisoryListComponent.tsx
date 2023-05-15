import { View, Text } from "react-native";
import React, { useContext } from "react";
import { ScrollView } from "react-native-gesture-handler";
import OrderItemComponent from "./OrderItemComponent";

import { UserContext } from "../Auth/userContext";

export default function OrderHisoryListComponent() {
  const { state } = useContext(UserContext);

  return (
    <View style={{ flex: 12 }}>
      <ScrollView>
        {state.history.orders && state.history
          ? state.history.orders.map((order) => {
              return (
                <OrderItemComponent
                  order_date={order.date}
                  orders={order.orderdetails}
                />
              );
            })
          : () => {
              return (
                <View style={{ backgroundColor: "blue" }}>
                  <Text> No Orders</Text>
                </View>
              );
            }}
      </ScrollView>
    </View>
  );
}
