import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import { NavigatorStripeParam } from "../../types/navigationTypes";
import stripestyle from "../../styles/stripestyles";
export default function StripePaymentComponent({ route }) {
  const { link } = route.params;

  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState<boolean>(false);
  const [currentUrl, setCurrentUrl] = useState("");

  const { navigate } = useNavigation<NavigatorStripeParam>();

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
          }
        }}
        style={stripestyle.webviewstyle}
      />
    </View>
  );
}
