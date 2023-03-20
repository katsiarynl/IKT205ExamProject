import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";
import products from "../../styles/products";
import { StudentContext } from "../../context";
export default function AddToCartButton(props) {
  const { dispatch, state } = useContext(StudentContext);

  const lol = {
    name: props.product_name,
    description: props.product_description,
    price: props.product_price,
  };
  const fundisp = (dispatch, cartitem) => {
    dispatch(
      (() => {
        return { type: "PLACE_ORDER", payload: cartitem };
      })()
    );
  };
  return (
    <View>
      <Pressable
        onPress={() => {
          console.log("pressed");
          fundisp(dispatch, lol);
          console.log(lol);

          fundisp(dispatch, "here");
          console.log("the quantity is :" + state.cartQuantity);
        }}
        //https://www.youtube.com/watch?v=ooEFRONfq_s
        style={({ pressed }) => pressed && { opacity: 0.4 }}
      >
        <View style={products.addTocartButton}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Add To Cart </Text>
        </View>
      </Pressable>
    </View>
  );
}
