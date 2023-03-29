import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import { StudentContext } from "../../context";
import cartstyle from "../../styles/cartstyles";
import POSTStripe from "../../utilities/POSTStripe";

async function testCallback(callback, navigate) {
  const link = await callback;

  navigate("stripe", { link });
  return link;
}
export default function CheckoutButtonComponent() {
  const navigator = useNavigation();
  const { state } = useContext(StudentContext);

  return (
    <View
      style={{
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable
        style={[
          cartstyle.checkoutbutton,
          state.cartItems.length != 0
            ? { backgroundColor: "#FF7878" }
            : { backgroundColor: "gray" },
        ]}
        disabled={state.cartItems.length == 0}
        onPress={() =>
          testCallback(POSTStripe(state.cartItems), navigator.navigate)
        }
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
