import { View } from "react-native";
import React from "react";
import { SignIn } from "../Auth/SignIn";
import { UserInfoAlert } from "../ToastMessage/infoAlert";

export default function FavoritesComponent() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserInfoAlert></UserInfoAlert>
    </View>
  );
}
