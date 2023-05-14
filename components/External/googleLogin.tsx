import { View, Text, Button } from "react-native";
import React, { useContext, useEffect } from "react";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { UserContext } from "../Auth/userContext";
import Icon from "react-native-vector-icons/FontAwesome";
import { signInStyle } from "../../styles/signIn";
import { useNavigation } from "@react-navigation/native";
import { NavigationHome } from "../../types/navigationTypes";
export const GoogleComponent = () => {
  const navigation = useNavigation<NavigationHome>();
  const { setIsloggedIn } = useContext(UserContext);
  const onGoogleSignIn = async () => {
    try {
      GoogleSignin.configure({
        webClientId:
          "724932999085-fk2aeclm6o98v2lai321vdj33431siqn.apps.googleusercontent.com",
      });

      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      const { idToken } = await GoogleSignin.signIn();

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      const user_sign_in = auth().signInWithCredential(googleCredential);
      user_sign_in
        .then((user) => {
          console.log(user);
        })
        .catch((error) => {
          console.log(error);
        });

      navigation.navigate("Home");
    } catch (err) {
      console.error(err);
    }
    setIsloggedIn(true);
  };
  return (
    <View style={signInStyle.googleStyle}>
      <Icon.Button
        name="google"
        backgroundColor="#900603"
        onPress={onGoogleSignIn}
      >
        Login with Google
      </Icon.Button>
    </View>
  );
};
