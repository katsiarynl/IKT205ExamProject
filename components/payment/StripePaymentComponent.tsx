import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { View } from "react-native";
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
import { Product } from "../../types/productTypes";
async function AddToHistory(
  getCredentials: CredentilsCallBackType,
  POSTOrder: PostOrderCallback,
  ordered_dishes: Product[],
  empty_cart: EmptyCartCallback,
  dispatch: Dispatch<ActionsType>,
  GETHistory: GetHistoryCallback,
  dispatchUser: Dispatch<ActionsType>,
  sendMail: POSTEmailCallback
) {
  const credentials = await getCredentials();

  POSTOrder(
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
    text1: `Your Payment was successful! `,
    text2: `Check your order history!`,
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
  //https://andrewnbishop.com/working-with-web-views-in-react-native

  const { render, setRender } = useContext(UserContext);

  const { navigate } = useNavigation<NavigatorStripeParam>();

  return (
    <View style={stripestyle.screen_webviewstyle}>
      <WebView
        source={{
          uri: link,
        }}
        // when payment is successfull - url will become undefined -> error == good
        onNavigationStateChange={(navState) => {
          //if payment is successful
          if (navState.url == "https://cook2go.herokuapp.com/success") {
            navigate("navbar");

            if (render == 0) {
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
              setRender(1);
            } else {
              setRender(0);
            }

            //toast message
            if (navState.url.includes("success")) {
              paymentSuccess();
            }
            return;
          } else if (navState.url == "https://cook2go.herokuapp.com/cancel") {
            navigate("navbar");
          }
        }}
        style={stripestyle.webviewstyle}
      />
    </View>
  );
}
