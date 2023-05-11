import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import products from "../../styles/products";
import { RestaurantContext } from "../../context";
import { Product } from "../../types/productTypes";
import Toast, { BaseToast } from "react-native-toast-message";
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

  const alertAddToCart = () => {
    fundisp(dispatch, new_product);

    Toast.show({
      type: "success",
      text1: "Item added to cart!",
      text2: `${new_product.price} has been added to your cart.`,
      position: "top",
      autoHide: true,
      topOffset: 47,
      bottomOffset: 90,
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Pressable
        onPress={() => {
          alertAddToCart();
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
