import { View, Text } from "react-native";
import React from "react";
import { orderHistorystyles } from "../../styles/orderstyles";
import { Total } from "../shoppingcart/TotalOrdersComponent";

export default function OrderItemComponent(props) {
  const calc = Total(props.orders);
  return (
    <View style={orderHistorystyles.orderitem}>
      <Text style={{ fontSize: 25, paddingBottom: 10, fontWeight: "bold" }}>
        Date: {props.order_date}
      </Text>

      <View>
        {props.orders.map((order) => {
          return (
            <Text style={{ fontSize: 20, paddingBottom: 10 }}>
              Restaurant: {order.restaurant} Dish: {order.name} Price:
              {order.price} quanity:
              {order.cartQuantity}
            </Text>
          );
        })}
        <Text style={{ fontWeight: "bold", fontSize: 20, padding: 10 }}>
          Total: {calc} kr
        </Text>
      </View>
    </View>
  );
}
