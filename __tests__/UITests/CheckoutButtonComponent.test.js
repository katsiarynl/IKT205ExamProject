import React from "react";
import { create } from "react-test-renderer";
import CheckoutButtonComponent from "../../components/shoppingcart/CheckoutButtonComponent";
const tree = create(<CheckoutButtonComponent />);

test("snapshot", () => {
  expect(tree).toMatchSnapshot();
});
