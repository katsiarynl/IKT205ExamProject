import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext } from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import { NavigatorStripeParam } from "../../types/navigationTypes";
import POSTMail from "../../utilities/ConfirmPayment";
import { RestaurantContext } from "../../context";
import stripestyle from "../../styles/stripestyles";
import POSTOrder from "../../utilities/POSTOrder";
import { UserContext } from "../Auth/userContext";

import GetTokenAndId from "../../utilities/GetTokenAndId";
import GETOrderHistoryById from "../../utilities/GETOrderHistoryById";
import empty_cart from "../../utilities/Empty_Cart";
async function AddToHistory(
  getCredentials,
  POSTOrder,
  ordered_dishes,
  empty_cart,
  dispatch,
  GETHistory,
  dispatchUser,
  sendMail
) {
  const credentials = await getCredentials();
  // console.log(history);

  await POSTOrder(
    {
      ordered_dishes,
      email: credentials.email,
    },
    credentials.token
  );

  await sendMail(ordered_dishes, credentials.email);

  // GETHistory(credentials.token, dispatch);
  await GETHistory(credentials.email, dispatchUser);
  return empty_cart(dispatch);
}

export default function StripePaymentComponent({ route }) {
  const { state } = useContext(RestaurantContext);
  const { link, ordered_dishes } = route.params;
  const { dispatch } = useContext(RestaurantContext);
  const { dispatchUser } = useContext(UserContext);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState<string>(false);
  const [currentUrl, setCurrentUrl] = useState<string>("");

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

            AddToHistory(
              GetTokenAndId,
              POSTOrder,
              ordered_dishes,
              empty_cart,
              dispatch,
              GETOrderHistoryById,
              dispatchUser,
              POSTMail
            );
          }
        }}
        style={stripestyle.webviewstyle}
      />
    </View>
  );
}
