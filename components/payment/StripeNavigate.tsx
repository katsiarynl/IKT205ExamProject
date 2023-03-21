import { View, Text } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import StripePaymentComponent from "./StripePaymentComponent";
import POSTStripe from "../../utilities/POSTStripe";
import { StudentContext } from "../../context";
async function testCallback(callback, callback2, callback3) {
  const link = await callback;
  console.log("callback");
  console.log(link);
  callback2(link);
  callback3("stripe", { link });
  return link;
}
export default function StripeNavigate() {
  const { state } = useContext(StudentContext);
  const navigator = useNavigation();
  const [link, setLink] = useState("");
  useEffect(() => {
    const thelink = testCallback(
      POSTStripe(state.cartItems),
      setLink,
      navigator.navigate
    );
  }, []);

  return (
    <View>
      <Text>StripeNavigate</Text>
    </View>
  );
}
