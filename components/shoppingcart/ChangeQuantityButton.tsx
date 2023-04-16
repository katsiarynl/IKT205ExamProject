import { Text, Pressable } from "react-native";
import React, { useContext } from "react";
import DecreaseQuantity from "../../utilities/DecreaseItemQuantity";
import IncreaseQuantity from "../../utilities/IncreaseItemQuantity";
import { StudentContext } from "../../context";
import { ChangeQuantityButtonType } from "../../types/cartTypes";
// todo: add types
export default function ChangeQuantityButton(props: ChangeQuantityButtonType) {
  const { dispatch } = useContext(StudentContext);
  const existing_product = { _id: props._id };
  return (
    <Pressable
      onPress={() =>
        props.sign === "+"
          ? IncreaseQuantity(dispatch, existing_product)
          : DecreaseQuantity(dispatch, existing_product)
      }
      style={{
        // todo: fix styling
        backgroundColor: "green",
        width: "35%",
        height: "60%",
        // borderRadius: "10%",
        alignContent: "center",
        alignItems: "center",

        // borderRadius: "5%",
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
        }}
      >
        {props.sign}
      </Text>
    </Pressable>
  );
}
