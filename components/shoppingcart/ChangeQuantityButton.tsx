import { Text, Pressable } from "react-native";
import React, { useContext } from "react";
import DecreaseQuantity from "../../utilities/DecreaseItemQuantity";
import IncreaseQuantity from "../../utilities/IncreaseItemQuantity";
import { StudentContext } from "../../context";
// todo: add types
export default function ChangeQuantityButton(props) {
  const { dispatch } = useContext(StudentContext);
  const existing_product = { id: props.id };
  return (
    <Pressable
      onPress={() =>
        props.sign === "+"
          ? IncreaseQuantity(dispatch, existing_product)
          : DecreaseQuantity(dispatch, existing_product)
      }
      style={{
        // todo: fix styling
        backgroundColor: "orange",
        width: "30%",
        height: "40%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5%",
      }}
    >
      <Text style={{ fontWeight: "bold" }}> {props.sign}</Text>
    </Pressable>
  );
}
