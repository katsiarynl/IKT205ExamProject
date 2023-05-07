import React, { useState, useContext } from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../assets/star";
import { ActivityIndicator, Colors } from "react-native-paper";

import { restaurantStyle } from "../../styles/restaurantsStyle";
import { RestrauntItemComponentType } from "../../types/restrauntTypes";
import GETPath from "../../utilities/GETPath";
import fetchImage from "../../utilities/FetchImage";
import { UserContext } from "../Auth/userContext";

export default function RestrauntItemComponent(
  props: RestrauntItemComponentType
) {
  const ratingArray = Array.from({ length: Math.floor(props["rating"]) });
  const [avatare, setAvatar] = useState("");
  const [isLoading, setisLoading] = useState<boolean>(false);

  return !isLoading ? (
    <View>
      <Card elevation={5} style={restaurantStyle.cardStyle}>
        <Card.Cover
          style={restaurantStyle.coverStyle}
          source={{
            uri: avatare,
          }}
        />
        <Text style={restaurantStyle.title}>{props.name}</Text>
        <View style={restaurantStyle.starRatingStyle}>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
        </View>
        <Text style={restaurantStyle.address}>{props.address}</Text>
      </Card>
    </View>
  ) : (
    <ActivityIndicator animating={true} color={Colors.blue300} />
  );
}
