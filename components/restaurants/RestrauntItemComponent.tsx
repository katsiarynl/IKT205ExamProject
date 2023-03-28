import React from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../assets/star";
import { restaurantStyle } from "../../styles/restaurantsStyle";
import { RestrauntItemComponentType } from "../../types/restraunt";
export default function RestrauntItemComponent(
  props: RestrauntItemComponentType
) {
  const ratingArray = Array.from({ length: Math.floor(props["rating"]) });
  return (
    <View>
      <Card elevation={5} style={restaurantStyle.cardStyle}>
        <Card.Cover
          style={restaurantStyle.coverStyle}
          source={{
            uri: props.photo,
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
  );
}
