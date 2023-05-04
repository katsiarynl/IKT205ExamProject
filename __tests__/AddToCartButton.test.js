import React from "react";
import { create } from "react-test-renderer";
import AddToCartButtonComponent from "../components/products/AddToCartButton";
const tree = create(<AddToCartButtonComponent />);

test("snapshot", () => {
  expect(tree).toMatchSnapshot();
});