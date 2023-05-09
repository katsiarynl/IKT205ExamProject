import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";
import { RestaurantContext } from "../../context";

export const Total = (products) => {
  const initialValue = 0;

  const total_value = products.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.cartQuantity * currentValue.price,
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
        flexDirection: "column",
        backgroundColor: "transparent",
      }}
    >
      <Pressable
        style={{ flex: 1 }}
        onPress={() => Total(state.cartItems)}
      ></Pressable>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            backgroundColor: "transparent",
          }}
        >
          Total:{Total(state.cartItems)}
        </Text>
      </View>
    </View>
  );
}
