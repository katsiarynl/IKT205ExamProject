import { View, Text } from "react-native";
import React from "react";
import StudentProvider, { StudentContext } from "../../context";
function Dish() {
  const { state } = React.useContext(StudentContext);

  return (
    <StudentProvider>
      <View>
        {state.dishes.map((item, index) => {
          // return <Text key={index}>{item["author"]}</Text>;
          return <Text key={index}>{item["name"]}</Text>;
        })}
      </View>
    </StudentProvider>
  );
}

export default Dish;
