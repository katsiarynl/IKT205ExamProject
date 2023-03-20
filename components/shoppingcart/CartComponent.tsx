import React, { useContext } from "react";
import { View, Text } from "react-native";
import { StudentContext } from "../../context";
import { SafeAreaView, ScrollView } from "react-native";
import cartstyle from "../../styles/cartstyles";
import CartItemComponent from "./CartItemComponent";
import HeadComponent from "./HeadComponent";
import ProceedViewComponent from "./ProceedViewComponent";
export default function CartComponent() {
  const { state } = useContext(StudentContext);

  console.log(state.cartItems);
  return (
    <View style={{ backgroundColor: "#E6E6EA" }}>
      <HeadComponent />
      <SafeAreaView>
        <ScrollView style={cartstyle.scrollStyle}>
          {state.cartItems.map((item, index) => {
            console.log("run app tsx");
            // return <Text key={index}>{item["author"]}</Text>;
            return <Text key={index}>{item["name"]}</Text>;
          })}
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
