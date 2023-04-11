import React from "react";
import { useState } from "react";
import { signInStyle } from "../../styles/signIn";
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-paper";
import { SignIn } from "./SignIn";
import { useNavigation } from "@react-navigation/native";

// email Validation
const EmailsValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
// password validation
const PasswordValidation =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export const SignUp = ({ Navigation: any }) => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passWordVisible, setPassWordVisible] = useState(true);
  const [isValidEmail, setisValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  // the function for email validation
  const handleEmailchange = (text) => {
    setEmail(text);
  };
  // Handle Email Blur if the Email is Valid.

  const handleEmailBlur = () => {
    setisValidEmail(EmailsValidation.test(email));
  };
  // handle Password Blur if a password not valid

  const handlePasswordBlur = () => {
    setIsValidPassword(PasswordValidation.test(password));
  };

  const handlesubmit = () => {
    // console.log("ist pressed!");
  };

  return (
    <View style={signInStyle.container}>
      <SafeAreaView style={signInStyle.form}>
        <Text style={signInStyle.title}>Sign up</Text>
        <View style={signInStyle.inputs}>
          <Icon
            style={signInStyle.emailICon}
            name="envelope"
            size={20}
            color="black"
          />

          <TextInput
            placeholder="Enter Email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus={false}
            value={email}
            onChangeText={handleEmailchange}
            onBlur={handleEmailBlur}
          />
        </View>
        <View>
          {!isValidEmail && (
            <Text style={{ color: "red" }}>Invalid Email!</Text>
          )}
        </View>
        <View style={signInStyle.inputs2}>
          <TouchableOpacity
            onPress={() => setPassWordVisible(!passWordVisible)}
          >
            <Icon
              style={signInStyle.emailICon}
              name={passWordVisible ? "eye-slash" : "eye"}
              size={20}
              color="black"
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Enter Password"
            autoCapitalize="none"
            textContentType="password"
            numberOfLines={4}
            multiline={true}
            autoCorrect={false}
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
            onBlur={handlePasswordBlur}
          />
        </View>
        <View>
          {!isValidPassword && (
            <Text style={{ color: "red" }}>
              Invalid Password! (must contain at least 8 characters, including
              at least one uppercase letter, one lowercase letter, and one
              number)
            </Text>
          )}
        </View>

        <TouchableOpacity style={signInStyle.button} onPress={handlesubmit}>
          <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 19 }}>
            Sign up{" "}
          </Text>
        </TouchableOpacity>
        <Text style={signInStyle.orTextStyle}>----------Or-----------</Text>
        <View style={signInStyle.buttonSocial}>
          <Icon.Button
            name="facebook"
            backgroundColor="#3b5998"
            onPress={() => alert("Sign up with Facebook")}
          >
            Sign up with Facebook
          </Icon.Button>
        </View>
        <View style={signInStyle.googleStyle}>
          <Icon.Button
            name="google"
            backgroundColor="#900603"
            onPress={() => alert("Sign up with Facebook")}
          >
            Sign up with google
          </Icon.Button>
        </View>
        <View style={signInStyle.singUpContainer}>
          <Text style={signInStyle.textSingUp}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text
              style={{ fontWeight: "bold", color: "#7E3B14", fontSize: 19 }}
            >
              Sign In{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};
