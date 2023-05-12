import React from "react";
import { create } from "react-test-renderer";
import ForgotPasswordIcon from "../components/stacknavigator/ForgotPasswordIcon";
const mockedNavigate = jest.fn();
//https://stackoverflow.com/questions/61781274/how-to-mock-usenavigation-hook-in-react-navigation-5-0-for-jest-test
jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: mockedNavigate }),
}));
//https://github.com/react-navigation/react-navigation/issues/8207
jest.mock("@react-navigation/drawer", () => {
  return {
    addEventListener: jest.fn(),
    createDrawerNavigator: jest.fn(),
    DrawerItem: jest.fn(),
  };
});
jest.mock("@expo/vector-icons", () => {
  return {};
});
jest.mock("react-native-paper", () => {
  return {};
});

const tree = create(<ForgotPasswordIcon />);
test("Check if the user is navigated to the ForgotPass screen when the ForgotPass draw icon is pressed", () => {
  const button = tree.root.findByProps({
    testID: "FogotPasswordIcon",
  }).props;
  button.onPress();
  expect(mockedNavigate).toBeCalledWith("ForgetPass");
});
