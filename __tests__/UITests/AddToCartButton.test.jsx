import React from "react";
import { create } from "react-test-renderer";
import AddToCartButton from "../../components/products/AddToCartButton";
const tree = create(<AddToCartButton />);

test("Snapshot for AddToCartButton", () => {
  expect(tree).toMatchSnapshot();
});
