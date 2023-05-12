import { NavigationContainer } from "@react-navigation/native";
import ForgetPassowrdButtonComponent from "../../components/Auth/ForgetPassowrdButtonComponent";
import { create } from "react-test-renderer";

const mockedNavigate = jest.fn();
//https://stackoverflow.com/questions/61781274/how-to-mock-usenavigation-hook-in-react-navigation-5-0-for-jest-test
jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: mockedNavigate }),
}));

const tree = create(<ForgetPassowrdButtonComponent />);

test("snapshot", () => {
  expect(tree).toMatchSnapshot();
});
