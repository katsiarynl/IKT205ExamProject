import { View, Image } from "react-native";
import React from "react";
import restrauntInfoStyles from "../../styles/restrauntinfostyles";
import RestrauntDescriptionComponent from "./RestrauntDescriptionComponent";

export default function RestrauntComponent() {
  return (
    <View style={restrauntInfoStyles.restrauntview}>
      <Image
        style={{
          width: "100%",
          height: "100%",
          marginBottom: "-5%",
          flex: 2,
        }}
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      <RestrauntDescriptionComponent />
    </View>
  );
}
