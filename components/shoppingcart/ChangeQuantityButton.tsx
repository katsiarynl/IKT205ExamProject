import { Text, Pressable } from "react-native";
import React, { useContext } from "react";
import DecreaseQuantity from "../../utilities/DecreaseItemQuantity";
import IncreaseQuantity from "../../utilities/IncreaseItemQuantity";
import { RestaurantContext } from "../../context";
import { ChangeQuantityButtonType } from "../../types/cartTypes";

export default function ChangeQuantityButton(props: ChangeQuantityButtonType) {
  const { dispatch } = useContext(RestaurantContext);
  const existing_product = { _id: props._id };

  return (
    <Pressable
      onPress={() =>
        props.sign === "+"
          ? IncreaseQuantity(dispatch, existing_product)
          : DecreaseQuantity(dispatch, existing_product)
      }
      style={{
        backgroundColor: "#B71C1C",
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          color: "white",
        }}
      >
        {props.sign}
      </Text>
    </Pressable>
  );
}
