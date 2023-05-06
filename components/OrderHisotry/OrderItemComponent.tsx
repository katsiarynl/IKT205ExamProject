import { View, Text } from "react-native";
import React from "react";
import { orderHistorystyles } from "../../styles/orderstyles";
import { Total } from "../shoppingcart/TotalOrdersComponent";

export default function OrderItemComponent(props) {
  const calc = Total(props.orders);
  return (
    <View style={orderHistorystyles.orderitem}>
      {props.orders.map((order) => {
        return (
          <Text>
            Dish: {order.name} Price: {order.price} quanity:
            {order.cartQuantity}
          </Text>
        );
      })}
      <Text>HEYYY{calc}</Text>
    </View>
  );
}
