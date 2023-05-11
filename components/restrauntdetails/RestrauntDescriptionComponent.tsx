import { View, Text } from "react-native";
import React from "react";
import restrauntInfoStyles from "../../styles/restrauntinfostyles";
export default function RestrauntDescriptionComponent(props) {
  return (
    <View style={restrauntInfoStyles.restrauntdescription}>
      <View
        style={{
          marginBottom: 10,
          backgroundColor: "orange",
          borderRadius: 15,
          width: "50%",
          height: "30%",
          marginTop: "-3%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>{props.name}</Text>
      </View>
      <View>
        <Text>{props.description}</Text>
      </View>
    </View>
  );
}
