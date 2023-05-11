import React from "react";
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
import { ScrollView } from "react-native";

import { UserContext } from "./userContext";

import GETOrderHistoryById from "../../utilities/GETOrderHistoryById";
import SetUser from "../../utilities/SetUser";
// email Validation
const EmailsValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
// password validation
const PasswordValidation = /^(?=.*[a-zA-Z]?\d?[a-zA-Z]?).{6,}$/;
export const SignIn = () => {
  const navigation = useNavigation<NavigationSignOut>();

  const { setIsloggedIn, setIsuserEmail, dispatchUser } =
    useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState<string>("");

  const [isValidEmail, setisValidEmail] = useState<boolean>(true);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true);
  const [secureTextEntry, SetsecureTextEntry] = useState<boolean>(true);

  const handleEmailchange = (text: string) => {
    setEmail(text);
  };

  const handleEmailBlur = () => {
    setisValidEmail(EmailsValidation.test(email));
  };
  const handlePasswordBlur = () => {
    if (password.length >= 6) {
      setIsValidPassword(true);
    }
    setIsValidPassword(PasswordValidation.test(password));
  };

  const handleSignIn = async () => {
    try {
      const response = await axios.post(
        "https://cook2go.herokuapp.com/signIn",
        {
          email: email,
          password: password,
        }
      );

      if (response.data.accessToken) {
        await SetUser(
          response.data.accessToken,
          response.data.userEmail,
          GETOrderHistoryById,
          dispatchUser
        );
      }

      setEmail("");
      setPassword("");
      setIsloggedIn(true);
      setIsuserEmail(true);

      navigation.navigate("Home");
    } catch (err: any) {
      Alert.alert(
        "Invalid Email or Password",
        "Please make your your Email password is right!"
      );
    }
  };

  return (
    <View style={signInStyle.container}>
      <SafeAreaView style={signInStyle.form}>
        <ScrollView>
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
                Invalid Password! (must contain at least 6 characters,)
              </Text>
            )}
          </View>

          <TouchableOpacity style={signInStyle.button} onPress={handleSignIn}>
            <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 19 }}>
              Login{" "}
            </Text>
          </TouchableOpacity>
          <View style={forgetPassStyle.container}>
            <TouchableOpacity onPress={() => navigation.navigate("ForgetPass")}>
              <Text
                style={{ fontWeight: "bold", color: "#7E3B14", fontSize: 19 }}
              >
                Forget Password?{" "}
              </Text>
            </TouchableOpacity>
          </View>

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
              onPress={() => alert("Login with Google!")}
            >
              Login with Facebook
            </Icon.Button>
          </View>
          <View style={signInStyle.singUpContainer}>
            <Text style={signInStyle.textSingUp}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text
                style={{ fontWeight: "bold", color: "#7E3B14", fontSize: 19 }}
              >
                Sing Up{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
