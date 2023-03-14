import { View, Text } from "react-native";
import React, { useState } from "react";
import cartstyle from "../../styles/cartstyles";
import { Image } from "react-native";
import QuantityComponent from "./QuantityComponent";
import CartItemPreviewComponent from "./CartItemPreviewComponent";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../firebase";

export default function CartItemComponent() {
  const [avatare, setAvatar] = useState("");

  (function getImg() {
    getDownloadURL(
      ref(storage, "gs://studentfirebase-8c937.appspot.com/jpegburgeeer.png")
    )
      .then((url) => setAvatar(url))
      .catch((error) => console.log(error));
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
      <CartItemPreviewComponent />
    </View>
  );
}
