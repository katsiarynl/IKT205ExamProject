import { View, Image } from "react-native";
import React, { useState } from "react";
import { storage } from "../../firebase";
import restrauntInfoStyles from "../../styles/restrauntinfostyles";
import RestrauntDescriptionComponent from "./RestrauntDescriptionComponent";
import { getDownloadURL, ref } from "firebase/storage";
import GETImage from "../../utilities/GETImage";
import fetchImage from "../../utilities/FetchImage";
export default function RestrauntComponent(props) {
  const [avatare, setAvatar] = useState("");
  fetchImage(GETImage, setAvatar, props.image);
  return (
    <View style={restrauntInfoStyles.restrauntview}>
      <Image
        style={{
          width: "100%",
          height: "100%",
          marginBottom: "-5%",
          flex: 2,
        }}
        source={{
          uri: avatare,
        }}
      />
      <RestrauntDescriptionComponent />
    </View>
  );
}
