import React, { useState } from "react";
import { Card } from "react-native-paper";
import { restaurantStyle } from "../../styles/restaurantsStyle";
import { Text } from "react-native-paper";
import { View, FlatList, Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../assets/star";
import GETBlogs from "../../utilities/GETBlogs";
import { RestrauntItemComponentType } from "../../types/restraunt";
import { useContext } from "react";
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
            uri: props.photos,
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
