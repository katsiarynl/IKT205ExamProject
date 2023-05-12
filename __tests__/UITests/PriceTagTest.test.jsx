import React from "react";
import { create } from "react-test-renderer";

import PriceTagComponent from "../../components/products/PriceTagComponent";
const tree = create(<PriceTagComponent price="55" />);

test("snapshot", () => {
  expect(tree).toMatchSnapshot();
});
