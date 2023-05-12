import React from "react";
import { create } from "react-test-renderer";

import ChangeQuantityButton from "../../components/shoppingcart/ChangeQuantityButton";
const tree = create(<ChangeQuantityButton sign="-" />);

test("snapshot", () => {
  expect(tree).toMatchSnapshot();
});
