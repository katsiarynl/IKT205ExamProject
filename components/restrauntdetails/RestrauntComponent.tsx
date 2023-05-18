import { View, Image } from "react-native";
import React, { useState } from "react";

import restrauntInfoStyles from "../../styles/restrauntinfostyles";
import RestrauntDescriptionComponent from "./RestrauntDescriptionComponent";

import fetchImage from "../../utilities/FetchImage";
import GETPath from "../../utilities/GETPath";
import { RestaurantComponentType } from "../../types/restrauntTypes";
export default function RestrauntComponent(props: RestaurantComponentType) {
  const [avatare, setAvatar] = useState("");
  fetchImage(GETPath, setAvatar, props.image);
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
      <RestrauntDescriptionComponent
        name={props.name}
        description={props.description}
      />
    </View>
  );
}
