import { View, Text, Button } from "react-native";
import React, { useContext } from "react";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

export const GoogleComponent = () => {
  GoogleSignin.configure({
    webClientId:
      "724932999085-fk2aeclm6o98v2lai321vdj33431siqn.apps.googleusercontent.com",
  });
};

export const onGoogleSignIn = async () => {
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

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
};
