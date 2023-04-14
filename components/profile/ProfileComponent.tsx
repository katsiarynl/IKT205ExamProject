import React from "react";

import { View } from "react-native";
import { SignOut } from "../Auth/SignOut";
export default function ProfileComponent() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignOut />
    </View>
  );
}
