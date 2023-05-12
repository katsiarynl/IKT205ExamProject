import React from "react";
import { create } from "react-test-renderer";
import ProductCategoryComponent from "../../components/products/ProductCategoryComponent";
const tree = create(<ProductCategoryComponent category="Category" />);

jest.mock("react-native-paper", () => {
  return { Card: jest.fn() };
});

test("snapshot", () => {
  expect(tree).toMatchSnapshot();
});
