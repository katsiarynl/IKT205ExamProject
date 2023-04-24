import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { signInStyle } from "../../styles/signIn";
import {
  Alert,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
} from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { forgetPassStyle } from "../../styles/forgetPasswor";
import { NavigationSignOut } from "../../types/navigationTypes";
import ValidateEmail from "../../utilities/EmailValidation";
import { UserContext } from "./userContext";
// email Validation
import ForgetPassowrdButtonComponent from "./ForgetPassowrdButtonComponent";
import SignUpButtonComponent from "./SignUpButtonComponent";

// password validation
const PasswordValidation = /^(?=.*[a-z])(?=.*[a-z]).{6,}$/;
export const SignIn = () => {
  const navigation = useNavigation<NavigationSignOut>();
  const { setIsloggedIn } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passWordVisible, setPassWordVisible] = useState(true);
  const [isValidEmail, setisValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [secureTextEntry, SetsecureTextEntry] = useState(true);

  const handleEmailchange = (text) => {
    setEmail(text);
  };

  const handleEmailBlur = () => {
    setisValidEmail(ValidateEmail(email));
  };
  const handlePasswordBlur = () => {
    setIsValidPassword(PasswordValidation.test(password));
  };

  const handleSignIn = async () => {
    if (isValidEmail && isValidPassword) {
      try {
        const response = await axios.post(
          "https://cook2go.herokuapp.com/signIn",
          {
            email: email,
            password: password,
          }
        );
        const { userEmail } = response.data;
        if (response.data.accessToken && response.data.userEmail) {
          await AsyncStorage.setItem("AccessToken", response.data.accessToken);
          await AsyncStorage.setItem("userEmail", userEmail);
        }

        setEmail("");
        setPassword("");
        setIsloggedIn(true);
        navigation.navigate("Home");
      } catch (err: any) {
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
  };

  const handleSigningGoogel = async (token) => {
    try {
      const responseData = await axios.post(
        "http://localhost:5000/loginWithGoogle",
        { token: token }
      );
      const Aceestoken = responseData.data.accessToken;
      await AsyncStorage.setItem("AccessToken", Aceestoken);
    } catch (error) {
      console.error("Erorr with signing Google account!", error);
    }
  };

  return (
    <View style={signInStyle.container}>
      <SafeAreaView style={signInStyle.form}>
        <Text style={signInStyle.title}>Login</Text>
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
          <TouchableOpacity
            onPress={() => setPassWordVisible(!passWordVisible)}
          ></TouchableOpacity>
          <TextInput
            label="Password"
            keyboardType="email-address"
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
              Invalid Password! (must contain at least 6 characters,)
            </Text>
          )}
        </View>

        <TouchableOpacity style={signInStyle.button} onPress={handleSignIn}>
          <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 19 }}>
            Login{" "}
          </Text>
        </TouchableOpacity>
        <ForgetPassowrdButtonComponent />

        <Text style={signInStyle.orTextStyle}>………………………or………………………</Text>
        <View style={signInStyle.buttonSocial}>
          <Icon.Button
            name="facebook"
            backgroundColor="#3b5998"
            onPress={() => alert("Login with Facebook")}
          >
            Login with Facebook
          </Icon.Button>
        </View>
        <View style={signInStyle.googleStyle}>
          <Icon.Button
            name="google"
            backgroundColor="#900603"
            onPress={handleSigningGoogel}
          >
            Login with Facebook
          </Icon.Button>
        </View>
        <SignUpButtonComponent />
      </SafeAreaView>
    </View>
  );
};
