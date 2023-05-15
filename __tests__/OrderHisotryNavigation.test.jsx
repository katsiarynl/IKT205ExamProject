import React from "react";
import { create } from "react-test-renderer";
import HistoryIconComponent from "../components/stacknavigator/HistoryIconComponent";
const mockedNavigate = jest.fn();
//https://stackoverflow.com/questions/61781274/how-to-mock-usenavigation-hook-in-react-navigation-5-0-for-jest-test
jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: mockedNavigate }),
}));
//https://github.com/react-navigation/react-navigation/issues/8207
jest.mock("@react-navigation/drawer", () => {
  return {
    DrawerItem: jest.fn(),
  };
});
jest.mock("@expo/vector-icons", () => {
  return {};
});
jest.mock("react-native-paper", () => {
  return {};
});

const tree = create(<HistoryIconComponent />);
test("Check if the user is navigated to the orderhistory screen whe the Order History draw icon is pressed", () => {
  const button = tree.root.findByProps({
    testID: "OrderHistoryIcon",
  }).props;
  button.onPress();
  expect(mockedNavigate).toBeCalledWith("orderHistory");
});
