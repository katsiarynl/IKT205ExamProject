import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { signInStyle } from "../../styles/signIn";
import { NavigationSignOut } from "../../types/navigationTypes";
import { useNavigation } from "@react-navigation/native";

export default function SignInButtonComponent() {
  const navigation = useNavigation<NavigationSignOut>();
  return (
    <View style={signInStyle.singUpContainer}>
      <Text style={signInStyle.textSingUp}>Already have an account? </Text>
      <TouchableOpacity
        testID="SignInButton"
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={{ fontWeight: "bold", color: "#7E3B14", fontSize: 19 }}>
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
}
