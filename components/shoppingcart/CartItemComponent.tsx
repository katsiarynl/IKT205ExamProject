import React, { useState } from "react";
import { Image, View } from "react-native";

import cartstyle from "../../styles/cartstyles";
import CartItemPreviewComponent from "./CartItemPreviewComponent";

import fetchImage from "../../utilities/FetchImage";
import GETPath from "../../utilities/GETPath";
import { Product } from "../../types/productTypes";
export default function CartItemComponent(props: Product) {
  const [avatare, setAvatar] = useState("");

  fetchImage(GETPath, setAvatar, props.image);

  return (
    <View style={cartstyle.cartItem}>
      <Image
        source={{
          uri: avatare,
        }}
        style={{
          width: "40%",
          height: "70%",
          margin: "5%",
        }}
      ></Image>

      <CartItemPreviewComponent
        _id={props._id}
        name={props.name}
        description={props.description}
        price={props.price}
        quantity={props.quantity}
      />
    </View>
  );
}
