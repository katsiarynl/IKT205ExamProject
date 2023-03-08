import { View, Text } from "react-native";
import React from "react";
import { StudentContext } from "../context";

function Dish() {
  const { state } = React.useContext(StudentContext);
  const { dishes } = state;
  console.log("The dish is");
  console.log(Object.values(dishes)[0]);
  return (
    <View>
      <Text>test</Text>
    </View>
  );
}

export default Dish;
