import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext } from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import { NavigatorStripeParam } from "../../types/navigationTypes";
import POSTMail from "../../utilities/ConfirmPayment";
import { StudentContext } from "../../context";
import stripestyle from "../../styles/stripestyles";
import POSTOrder from "../../utilities/POSTOrder";
import { UserContext } from "../Auth/userContext";
import { UsersEmail, getUserByEmail } from "../userInfo/getUserInfo";
import GetTokenAndId from "../../utilities/GetTokenAndId";
import GETOrderHistoryById from "../../utilities/GETOrderHistoryById";
async function AddToHistory(
  getCredentials,
  POSTOrder,
  ordered_dishes,
  empty_cart,
  dispatch,
  GETHistory,
  dispatchUser
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

  // GETHistory(credentials.token, dispatch);
  await GETHistory(credentials.email, dispatchUser);
  return empty_cart(dispatch);
}

export default function StripePaymentComponent({ route }) {
  const { state } = useContext(StudentContext);
  const { link, ordered_dishes } = route.params;
  const { dispatch } = useContext(StudentContext);
  const { dispatchUser } = useContext(UserContext);
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
            // POSTMail(ordered_dishes);
            AddToHistory(
              GetTokenAndId,
              POSTOrder,
              ordered_dishes,
              empty_cart,
              dispatch,
              GETOrderHistoryById,
              dispatchUser
            );

            // POSTOrder(
            //   {
            //     ordered_dishes,
            //     email: value,
            //   },
            //   "YZU5Go5XQYQV4ZjfJcM4mY8XVFo1"
            // );
            // empty_cart(dispatch);
          }
        }}
        style={stripestyle.webviewstyle}
      />
    </View>
  );
}
