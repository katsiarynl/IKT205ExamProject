import React from "react";

import { View, Image } from "react-native";
export default function ProfileComponent() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: "100%", height: "100%" }}
        src={
          "https://images.pexels.com/photo/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg"
        }
      />
    </View>
  );
}
