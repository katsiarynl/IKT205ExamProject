import { View, Text } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import POSTStripe from "../../utilities/POSTStripe";
import { RestaurantContext } from "../../context";

import { Product } from "../../types/productTypes";
//getting stripe link
async function NavigateToStripeWebView(
  callback: Promise<string>,
  callback2: React.Dispatch<React.SetStateAction<string>>,
  callback3: any,
  ordered_dishes: Product[]
) {
  const link = await callback;

  callback2(link);
  callback3("stripe", { link, ordered_dishes });
  return link;
}
export default function StripeNavigate() {
  const { state } = useContext(RestaurantContext);
  const navigator = useNavigation();
  const [_, setLink] = useState("");
  useEffect(() => {
    NavigateToStripeWebView(
      POSTStripe(state.cartItems),
      setLink,
      navigator.navigate,
      state.cartItems
    );
  }, []);

  return (
    <View>
      <Text>StripeNavigate</Text>
    </View>
  );
}
