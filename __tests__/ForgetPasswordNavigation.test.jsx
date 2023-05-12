import React from "react";
import { create } from "react-test-renderer";

import ForgetPassowrdButtonComponent from "../components/Auth/ForgetPassowrdButtonComponent";
import { NavigationContainer } from "@react-navigation/native";

const mockedNavigate = jest.fn();
//https://stackoverflow.com/questions/61781274/how-to-mock-usenavigation-hook-in-react-navigation-5-0-for-jest-test
jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: mockedNavigate }),
}));

const tree = create(<ForgetPassowrdButtonComponent />);
test("Check if the user is navigated to the ForgetPassword screen", () => {
  const button = tree.root.findByProps({
    testID: "ForgetPasswordButton",
  }).props;
  button.onPress();
  expect(mockedNavigate).toBeCalledWith("ForgetPass");
});
