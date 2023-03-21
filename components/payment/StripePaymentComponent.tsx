import React, { useState, useRef, useEffect } from "react";
import { View, Text } from "react-native";
import { WebView } from "react-native-webview";
import { useNavigation } from "@react-navigation/native";
import CartComponent from "../shoppingcart/CartComponent";
import POSTStripe from "../../utilities/POSTStripe";
import { useContext } from "react";
import { StudentContext } from "../../context";
import axios from "axios";

export default function StripePaymentComponent({ route, navigation }) {
  const { link } = route.params;
  console.log("The link is " + link);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const { state } = useContext(StudentContext);
  const navigator = useNavigation();
  const webviewRef = useRef(null);

  console.log("run");
  return (
    <WebView
      source={{
        uri: link,
      }}
      onNavigationStateChange={(navState) => {
        setCanGoBack(navState.canGoBack);
        setCanGoForward(navState.canGoForward);
        setCurrentUrl(navState.url);
        if (navState.url == "http://localhost:5000/success") {
          console.log(navState.url);
          console.log("WOW IT WORKS");
          navigator.navigate("lol");
        }
      }}
    />
  );
}
