import { View, Text } from "react-native";
import React from "react";
import RestaurantProvider, { RestaurantContext } from "../../context";
function Dish() {
  const { state } = React.useContext(RestaurantContext);

  return (
    <RestaurantProvider>
      <View>
        {state.restraunts.map((item, index) => {
          // return <Text key={index}>{item["author"]}</Text>;
          return <Text key={index}>{item["name"]}</Text>;
        })}
      </View>
    </RestaurantProvider>
  );
}

export default Dish;
