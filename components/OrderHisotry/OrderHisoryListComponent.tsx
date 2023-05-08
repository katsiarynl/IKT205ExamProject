import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";
import { ScrollView } from "react-native-gesture-handler";
import OrderItemComponent from "./OrderItemComponent";
import POSTOrder from "../../utilities/POSTOrder";
import GETOrderHistoryById from "../../utilities/GETOrderHistoryById";
import { UserContext } from "../Auth/userContext";
import { useNavigation } from "@react-navigation/native";
import GetTokenAndId from "../../utilities/GetTokenAndId";

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
