import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";
import products from "../../styles/products";
import { RestaurantContext } from "../../context";
import { Product } from "../../types/productTypes";
export default function AddToCartButton(props: Product) {
  const { dispatch } = useContext(RestaurantContext);

  const new_product = {
    _id: props._id,
    name: props.name,
    description: props.description,
    price: props.price,
    restaurant: props.restaurant,
    image: props.image,
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
          fundisp(dispatch, new_product);
        }}
        //https://www.youtube.com/watch?v=ooEFRONfq_s
        style={({ pressed }) => pressed && { opacity: 0.4 }}
      >
        <View style={products.addTocartButton}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Add To Cart</Text>
        </View>
      </Pressable>
    </View>
  );
}
