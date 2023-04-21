import React from "react";
import { create } from "react-test-renderer";
import CheckoutButtonComponent from "../components/shoppingcart/CheckoutButtonComponent";
import { NavigationContainer } from "@react-navigation/native";
//https://www.youtube.com/watch?v=6kM1Z5dDF-Q
const navigation = {
  navigate: jest.fn(),
};

describe("<App />", () => {
  test("resolves to lemon", async () => {
    const tree = await create(
      <NavigationContainer>
        <CheckoutButtonComponent />
      </NavigationContainer>
    );
    // make sure to add a return statement
    const button = tree.root.findByProps({ testID: "CheckoutNavigate" }).props;
    await button.onPress();

    expect(navigation.navigate).toBeCalledWith("SignIn");
  });
});
