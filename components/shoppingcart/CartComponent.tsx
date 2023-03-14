import { View, Text, Pressable } from "react-native";
import React from "react";

import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";
import CartItemComponent from "./CartItemComponent";
import cartstyle from "../../styles/cartstyles";
import CheckoutButtonComponent from "./CheckoutButtonComponent";
import HeadComponent from "./HeadComponent";
import ProceedViewComponent from "./ProceedViewComponent";
export default function CartComponent() {
  return (
    <View style={{ backgroundColor: "#E6E6EA" }}>
      <HeadComponent />
      <SafeAreaView>
        <ScrollView style={cartstyle.scrollStyle}>
          <CartItemComponent />
          <CartItemComponent />
          <CartItemComponent />
          <CartItemComponent />
          <CartItemComponent />
        </ScrollView>
      </SafeAreaView>
      <ProceedViewComponent />
    </View>
  );
}
