import { View, Text } from "react-native";
import React, { useState } from "react";
import cartstyle from "../../styles/cartstyles";
import { Image } from "react-native";
import QuantityComponent from "./QuantityComponent";
import CartItemPreviewComponent from "./CartItemPreviewComponent";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";

export default function CartItemComponent(props) {
  const [avatare, setAvatar] = useState("");
  const storageRef = ref(storage, "some-child");

  // 'file' comes from the Blob or File API
  const mountainsRef = ref(storage, "jpegburgeer.png");
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

      <CartItemPreviewComponent
        id={props.id}
        name={props["name"]}
        description={props["description"]}
        address={props["description"]}
        price={props["price"]}
        quantity={props["quantity"]}
      />
    </View>
  );
}
