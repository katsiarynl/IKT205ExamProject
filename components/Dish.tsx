import { View, Text } from "react-native";
import React from "react";
import StudentProvider, { StudentContext } from "../context";

function Dish() {
  const { state } = React.useContext(StudentContext);

  return (
    <StudentProvider>
      <View>
        {state.dishes.map((item, index) => {
          console.log("run app tsx");
          return <Text key={index}>{item["author"]}</Text>;
        })}
      </View>
    </StudentProvider>
  );
}

export default Dish;
