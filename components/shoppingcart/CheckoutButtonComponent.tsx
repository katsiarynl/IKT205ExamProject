import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import { StudentContext } from "../../context";
import cartstyle from "../../styles/cartstyles";
import POSTStripe from "../../utilities/POSTStripe";
import { UserContext } from "../Auth/userContext";
import { NavigationSignIn } from "../../types/navigationTypes";

async function testCallback(callback, navigate) {
  const link = await callback;

  navigate("stripe", { link });
  return link;
}
export default function CheckoutButtonComponent() {
  const navigator = useNavigation();
  const NavigatorHome = useNavigation<NavigationSignIn>();
  const { state } = useContext(StudentContext);

  const { isloggedIn } = useContext(UserContext);

  const handleCheout = async () => {
    if (isloggedIn) {
      await testCallback(POSTStripe(state.cartItems), navigator.navigate);
    } else {
      NavigatorHome.navigate("SignIn");
    }
  };
  return (
    <View
      style={{
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable
        style={({ pressed }) => [
          cartstyle.checkoutbutton,
          state.cartItems.length !== 0
            ? { backgroundColor: "#FF7878", ...(pressed && { opacity: 0.4 }) }
            : { backgroundColor: "gray" },
        ]}
        disabled={state.cartItems.length === 0}
        onPress={handleCheout}
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
