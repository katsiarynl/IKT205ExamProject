import {
  Alert,
  TouchableOpacity,
  View,
  SafeAreaView,
  Text,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { forgetPassStyle } from "../../styles/forgetPasswor";
import axios from "axios";
//const Emailvalidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const ForgetPass = () => {
  const [email, setEmail] = useState("");

  const handleEmailchange = (text) => {
    setEmail(text);
  };

  const handleForgetPassword = async () => {
    try {
      await axios.post("https://cook2go.herokuapp.com/forgetPassword", {
        email,
      });
      setEmail(" ");
      Alert.alert(
        "Password Reset Link Sent to your Email",
        "Check your Email Spam box!",
        [{ text: "OK", onPress: undefined }]
      );
    } catch (error) {
      Alert.alert("Invalid Email ", "Pleas make sure is a valid email! ");
    }
  };
  return (
    <View style={forgetPassStyle.containerFor}>
      <SafeAreaView style={forgetPassStyle.form}>
        <Text style={forgetPassStyle.title}>Forget Password</Text>
        <View style={forgetPassStyle.inputs}>
          <TextInput
            label="Email"
            keyboardType="email-address"
            mode="outlined"
            autoCapitalize="none"
            value={email}
            theme={{ roundness: 10 }}
            style={{ backgroundColor: "#ffff" }}
            left={<TextInput.Icon icon={"email-outline"} color="#fffd" />}
            onChangeText={handleEmailchange}
          />
        </View>
        <View></View>
        <TouchableOpacity
          style={forgetPassStyle.button}
          onPress={handleForgetPassword}
        >
          <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 19 }}>
            Submit
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};
