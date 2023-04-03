import React, { useContext } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { StudentContext } from "../../context";
import cartstyle from "../../styles/cartstyles";
import CartItemComponent from "./CartItemComponent";
import HeadComponent from "./HeadComponent";
import ProceedViewComponent from "./ProceedViewComponent";

export default function CartComponent() {
  const { state } = useContext(StudentContext);

  return (
    <View style={{ backgroundColor: "#E6E6EA" }}>
      <HeadComponent />
      <SafeAreaView>
        <ScrollView style={cartstyle.scrollStyle}>
          {state.cartItems.map((item) => {
            return (
              <CartItemComponent
                _id={item["_id"]}
                name={item["name"]}
                description={item["description"]}
                price={item["price"]}
                quantity={item["cartQuantity"]}
              />
            );
          })}
        </ScrollView>
      </SafeAreaView>
      <ProceedViewComponent />
    </View>
  );
}
