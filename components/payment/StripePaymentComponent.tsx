import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import { WebView } from "react-native-webview";
import { NavigatorStripeParam } from "../../types/navigationTypes";
import POSTMail from "../../utilities/ConfirmPayment";
import { RestaurantContext } from "../../context";
import stripestyle from "../../styles/stripestyles";
import POSTOrder from "../../utilities/POSTOrder";
import { UserContext } from "../Auth/userContext";
import { ActionsType } from "../../context";
import { Dispatch } from "react";
import GetTokenAndId from "../../utilities/GetTokenAndId";
import GETOrderHistoryById from "../../utilities/GETOrderHistoryById";
import empty_cart from "../../utilities/Empty_Cart";
import Toast from "react-native-toast-message";
import {
  CredentilsCallBackType,
  EmptyCartCallback,
  GetHistoryCallback,
  POSTEmailCallback,
  PostOrderCallback,
} from "../../types/callbackTypes";
import { GeneralProductQ } from "../../types/orderTypes";
async function AddToHistory(
  getCredentials: CredentilsCallBackType,
  POSTOrder: PostOrderCallback,
  ordered_dishes: GeneralProductQ[],
  empty_cart: EmptyCartCallback,
  dispatch: Dispatch<ActionsType>,
  GETHistory: GetHistoryCallback,
  dispatchUser: Dispatch<ActionsType>,
  sendMail: POSTEmailCallback
) {
  const credentials = await getCredentials();

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
const paymentSuccess = () => {
  Toast.show({
    type: "success",
    text1: `Your Payment has been success `,
    text2: `Welcome back! `,
    position: "top",
    autoHide: true,
    topOffset: 40,
    bottomOffset: 90,
  });
};

export default function StripePaymentComponent({ route }) {
  const { link, ordered_dishes } = route.params;
  const { dispatch } = useContext(RestaurantContext);
  const { dispatchUser } = useContext(UserContext);
  const [_canGoBack, setCanGoBack] = useState(false);
  const [_canGoForward, setCanGoForward] = useState<boolean>(false);
  const [_currentUrl, setCurrentUrl] = useState<string>("");

  const { navigate } = useNavigation<NavigatorStripeParam>();

  return (
    <View style={stripestyle.screen_webviewstyle}>
      <WebView
        source={{
          uri: link,
        }}
        onError={() => setCurrentUrl("http://localhost:5000/success")}
        // when payment complites - url will become undefined -> error == good
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
          if (navState.url.includes("success")) {
            paymentSuccess();
          }
        }}
        style={stripestyle.webviewstyle}
      />
    </View>
  );
}
