import { getDownloadURL, ref } from "firebase/storage";
import React, { useState } from "react";
import { Image, View } from "react-native";
import { storage } from "../../firebase";
import cartstyle from "../../styles/cartstyles";
import CartItemPreviewComponent from "./CartItemPreviewComponent";

export default function CartItemComponent(props) {
  const [avatare, setAvatar] = useState("");

  (function getImg() {
    getDownloadURL(
      ref(storage, "gs://studentfirebase-8c937.appspot.com/jpegburgeeer.png")
    )
      .then((url) => setAvatar(url))
      .catch((error) => console.error(error));
  })();

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
