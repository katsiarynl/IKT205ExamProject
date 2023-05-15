import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { signInStyle } from "../../styles/signIn";
import { useNavigation } from "@react-navigation/native";
import { NavigationSignOut } from "../../types/navigationTypes";

export default function SignUpButtonComponent() {
  const navigation = useNavigation<NavigationSignOut>();
  return (
    <View style={signInStyle.singUpContainer}>
      <Text style={signInStyle.textSingUp}>Don't have an account? </Text>
      <TouchableOpacity
        testID="SignUpIfNotRegistered"
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={{ fontWeight: "bold", color: "#7E3B14", fontSize: 19 }}>
          Sing Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}
