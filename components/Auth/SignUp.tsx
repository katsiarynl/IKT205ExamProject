import React from "react";
import { useState } from "react";
import { signInStyle } from "../../styles/signIn";
import {
  Alert,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { NavigationSignOut } from "../../types/navigationTypes";
import { TextInput } from "react-native-paper";
import SignInButtonComponent from "./SignInButtonComponent";

// email Validation
const EmailsValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
// password validation
const PasswordValidation = /^(?=.*[a-z])(?=.*[a-z]).{6,}$/;

export const SignUp = () => {
  const navigation = useNavigation<NavigationSignOut>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setisValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [secureTextEntry, SetsecureTextEntry] = useState(true);

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

  const handleSignUp = async () => {
    if (email && password) {
      if (isValidEmail && isValidPassword) {
        try {
          await axios.post("https://cook2go.herokuapp.com/signUp", {
            email: email,
            password: password,
          });

          // clear the textInputs After submits.
          setEmail("");
          setPassword("");
          navigation.navigate("SignIn");
        } catch (error: any) {
          Alert.alert(
            "Invalid Email or Password",
            "Please make your your Email password is right!"
          );
        }
      } else {
        Alert.alert(
          "Invalid Email or Password",
          "Please make sure Email and password is right!"
        );
      }
    } else {
      return false;
    }
  };
  return (
    <View style={signInStyle.container}>
      <SafeAreaView style={signInStyle.form}>
        <ScrollView>
          <Text style={signInStyle.title}>Sign up</Text>
          <View>
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
              onBlur={handleEmailBlur}
            />
          </View>
          <View>
            {!isValidEmail && (
              <Text style={{ color: "red" }}>Invalid Email!</Text>
            )}
          </View>
          <View>
            <TextInput
              label="Password"
              mode="outlined"
              autoCapitalize="none"
              secureTextEntry={secureTextEntry}
              value={password}
              theme={{ roundness: 10 }}
              style={{ backgroundColor: "#ffff" }}
              right={
                <TextInput.Icon
                  icon={"eye"}
                  color="#fffd"
                  onPress={() => {
                    SetsecureTextEntry(!secureTextEntry);
                    return false;
                  }}
                />
              }
              onChangeText={(text) => setPassword(text)}
              onBlur={handlePasswordBlur}
            />
          </View>
          <View>
            {!isValidPassword && (
              <Text style={{ color: "red" }}>
                Invalid Password! (must contain at least 6 characters, including
                lowercase letter, and one number)
              </Text>
            )}
          </View>

          <TouchableOpacity style={signInStyle.button} onPress={handleSignUp}>
            <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 19 }}>
              Sign up{" "}
            </Text>
          </TouchableOpacity>
          <Text style={signInStyle.orTextStyle}>………………………or………………………</Text>
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
          <SignInButtonComponent />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
