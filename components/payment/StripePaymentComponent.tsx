import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext } from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import { NavigatorStripeParam } from "../../types/navigationTypes";
import { StudentContext } from "../../context";
import stripestyle from "../../styles/stripestyles";
export default function StripePaymentComponent({ route }) {
  const { link } = route.params;
  const { dispatch } = useContext(StudentContext);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState<boolean>(false);
  const [currentUrl, setCurrentUrl] = useState("");

  const { navigate } = useNavigation<NavigatorStripeParam>();

  const empty_cart = (dispatch) => {
    dispatch(
      (() => {
        return { type: "REMOVE_ITEMS" };
      })()
    );
  };
  return (
    <View style={stripestyle.screen_webviewstyle}>
      <WebView
        source={{
          uri: link,
        }}
        onError={() => setCurrentUrl("http://localhost:5000/success")} // when payment complites - url will become undefined -> error == good
        onNavigationStateChange={(navState) => {
          setCanGoBack(navState.canGoBack);
          setCanGoForward(navState.canGoForward);
          setCurrentUrl(navState.url);

          if (navState.url == "http://localhost:5000/success") {
            navigate("navbar");
            navState.url = "http://localhost:5000/success";
            empty_cart(dispatch);
          }
        }}
        style={stripestyle.webviewstyle}
      />
    </View>
  );
}
