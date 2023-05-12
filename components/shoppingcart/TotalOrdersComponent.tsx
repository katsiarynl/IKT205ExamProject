import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";
import { RestaurantContext } from "../../context";

export const Total = (products) => {
  const initialValue = 0;

  const total_value = products.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.quantity * currentValue.price,
    initialValue
  );

  return total_value;
};

export default function TotalOrdersComponent() {
  const { state } = useContext(RestaurantContext);

  // console.log(state.cartItems);
  Total(state.cartItems);
  return (
    <View
      style={{
        flex: 2.8,
        justifyContent: "center",
        paddingLeft: "2%",
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          backgroundColor: "transparent",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Total:{Total(state.cartItems)} NOK
      </Text>
    </View>
  );
}
