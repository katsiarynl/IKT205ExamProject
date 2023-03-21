import React, { useState, useRef } from "react";
import { View, Text } from "react-native";
import { WebView } from "react-native-webview";
export default function StripePaymentComponent() {
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  const webviewRef = useRef(null);
  return (
    <WebView
      source={{
        uri: "https://reactnative.dev/docs/0.61/webview",
      }}
      onNavigationStateChange={(navState) => {
        setCanGoBack(navState.canGoBack);
        setCanGoForward(navState.canGoForward);
        setCurrentUrl(navState.url);
        if (navState.url == "https://reactnative.dev/docs/getting-started") {
          console.log(navState.url);
          console.log("hello");
        }
      }}
    />
  );
}
