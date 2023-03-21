import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import cartstyle from "../../styles/cartstyles";
export default function CheckoutButtonComponent() {
  const navigator = useNavigation();
  return (
    <View
      style={{
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "white",
      }}
    >
      <Pressable
        style={cartstyle.checkoutbutton}
        onPress={() => navigator.navigate("stripenavigate")}
      >
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
