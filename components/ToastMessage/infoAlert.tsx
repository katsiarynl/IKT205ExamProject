import { View, Text, TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";
import React from "react";
import { type } from "os";

export const UserInfoAlert = () => {
  return (
    <View>
      <Text>infoAlertdasdds</Text>
      <TouchableOpacity
        onPress={() =>
          Toast.show({
            type: "success",
            text1: "helle",
            text2: "waaak kennanan! hd ehhh",
          })
        }
      ></TouchableOpacity>
      <Toast />
    </View>
  );
};
