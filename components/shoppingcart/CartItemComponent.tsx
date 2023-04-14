import { getDownloadURL, ref } from "firebase/storage";
import React, { useState } from "react";
import { Image, View } from "react-native";
import { storage } from "../../firebase";
import cartstyle from "../../styles/cartstyles";
import CartItemPreviewComponent from "./CartItemPreviewComponent";
import { CartComponentType } from "../../types/cartTypes";
import GETImage from "../../utilities/GETImage";
import fetchImage from "../../utilities/FetchImage";
export default function CartItemComponent(props: CartComponentType) {
  const [avatare, setAvatar] = useState("");

  fetchImage(GETImage, setAvatar, props.image);

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
