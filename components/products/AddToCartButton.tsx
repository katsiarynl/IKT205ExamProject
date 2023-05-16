import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";
import products from "../../styles/products";
import { RestaurantContext } from "../../context";
import { GeneralProductImage } from "../../types/productTypes";
import Toast from "react-native-toast-message";
import { Product } from "../../types/productTypes";
export default function AddToCartButton(props: GeneralProductImage) {
  const { dispatch } = useContext(RestaurantContext);

  const new_product = {
    _id: props._id,
    name: props.name,
    description: props.description,
    price: props.price,
    restaurant: props.restaurant,
    image: props.image,
  };
  const fundisp = (dispatch, cartitem: Product) => {
    return dispatch({ type: "PLACE_ORDER", payload: cartitem });
  };

  const alertAddedToCart = () => {
    // @ts-ignore
    //quantity will be added in the restaurant context
    fundisp(dispatch, new_product);

    Toast.show({
      type: "success",
      text1: `${new_product.name} Has been added to your cart.`,
      text2: `${new_product.price + "NOK"} View Your cart `,
      position: "top",
      autoHide: true,
      topOffset: 40,
      bottomOffset: 90,
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Pressable
        onPress={() => {
          alertAddedToCart();
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
