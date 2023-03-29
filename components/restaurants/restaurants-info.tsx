import React from "react";
import { FlatList, Pressable, View } from "react-native";
import { Card, Text } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../assets/star";
import { restaurantStyle } from "../../styles/restaurantsStyle";

export const RestaurantsInfo = ({
  restaurants = [],
}: { restaurants?: any[] } = {}) => {
  const renderRestaurant = ({ item }) => {
    const { name, photo, address, rating } = item;

    const ratingArray = Array.from({ length: Math.floor(rating) });

    return (
      <Pressable>
        <Card elevation={5} style={restaurantStyle.cardStyle}>
          <Card.Cover
            key={name}
            style={restaurantStyle.coverStyle}
            source={{ uri: photo[0] }}
          />
          <Text style={restaurantStyle.title}>{name}</Text>
          <View style={restaurantStyle.starRatingStyle}>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </View>
          <Text style={restaurantStyle.address}>{address}</Text>
        </Card>
      </Pressable>
    );
  };

  const restaurantData = [
    {
      name: "Egon",
      photo: [
        "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
      ],
      address: "Aredal, nygaten 6",
      rating: 4.5,
    },
    {
      name: "Test",
      photo: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv5HLWElcMDkDwSUcZErKp4IqzT2VRuAnsKQ&usqp=CAU",
      ],
      address: "Oslo, city 6",
      rating: 3.5,
    },
    {
      name: "Shushi ",
      photo: [
        "https://media.istockphoto.com/id/685974568/photo/craft-beef-burger-and-french-fries-on-wooden-table-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=HOSTCWNcB1-6s13rmX0_HjEH6QpmKdmApr1zaASLRIY=",
      ],
      address: "uia, City 45",
      rating: 5,
    },
  ];

  return (
    <FlatList
      data={restaurantData}
      renderItem={renderRestaurant}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{ padding: 9 }}
    />
  );
};
