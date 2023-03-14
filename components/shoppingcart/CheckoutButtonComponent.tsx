import { View, Text, Pressable } from "react-native";
import React from "react";
import cartstyle from "../../styles/cartstyles";
export default function CheckoutButtonComponent() {
  return (
    <View
      style={{
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "white",
      }}
    >
      <Pressable style={cartstyle.checkoutbutton}>
        <View style={{ backgroundColor: "white " }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            Checkout
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
