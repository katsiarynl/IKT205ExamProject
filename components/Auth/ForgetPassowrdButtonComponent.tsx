import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { NavigationSignOut } from "../../types/navigationTypes";
import { forgetPassStyle } from "../../styles/forgetPasswor";

export default function ForgetPassowrdButtonComponent() {
  const navigation = useNavigation<NavigationSignOut>();

  return (
    <View style={forgetPassStyle.container}>
      <TouchableOpacity
        testID="ForgetPasswordButton"
        onPress={() => navigation.navigate("ForgetPass")}
      >
        <Text style={{ fontWeight: "bold", color: "#7E3B14", fontSize: 19 }}>
          Forget Password?{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
