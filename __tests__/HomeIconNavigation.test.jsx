import React from "react";
import HomeIconComponent from "../components/stacknavigator/HomeIconComponent";
import { create } from "react-test-renderer";
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

const tree = create(<HomeIconComponent />);
test("snapshot", () => {
  const button = tree.root.findByProps({
    testID: "HomeIcon",
  }).props;
  button.onPress();
  expect(mockedNavigate).toBeCalledWith("Home");
});
