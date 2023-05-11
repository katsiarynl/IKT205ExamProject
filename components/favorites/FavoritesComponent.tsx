import { View } from "react-native";
import React from "react";
import { SignIn } from "../Auth/SignIn";

export default function FavoritesComponent() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignIn></SignIn>
    </View>
  );
}
