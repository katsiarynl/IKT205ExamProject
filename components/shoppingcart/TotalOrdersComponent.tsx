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
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable
        style={{ flex: 0.3 }}
        onPress={() => Total(state.cartItems)}
      ></Pressable>
      <View style={{ flex: 1 }}>
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
    </View>
  );
}
