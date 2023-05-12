import React from "react";
import { create } from "react-test-renderer";
import AddToCartButton from "../../components/products/AddToCartButton";
const tree = create(<AddToCartButton />);

test("snapshot", () => {
  expect(tree).toMatchSnapshot();
});
