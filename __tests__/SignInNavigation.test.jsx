import React from "react";
import { create } from "react-test-renderer";
import SignInButtonComponent from "../components/Auth/SignInButtonComponent";

const mockedNavigate = jest.fn();
//https://stackoverflow.com/questions/61781274/how-to-mock-usenavigation-hook-in-react-navigation-5-0-for-jest-test
jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: mockedNavigate }),
}));

const tree = create(<SignInButtonComponent />);
test("Check if the user is navigated to sign in after the SignIn button is pressed", () => {
  const button = tree.root.findByProps({
    testID: "SignInButton",
  }).props;
  button.onPress();
  expect(mockedNavigate).toBeCalledWith("SignIn");
});
