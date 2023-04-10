import { View, Text } from "react-native";
import React from "react";
import { SignIn } from "../Auth/SignIn";

import { SignUp } from "../Auth/SignUp";

export default function FavoritesComponent() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignIn Navigation="tatial" />
    </View>
  );
}
