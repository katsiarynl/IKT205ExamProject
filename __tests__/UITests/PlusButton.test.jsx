import React from "react";
import { create } from "react-test-renderer";
import ChangeQuantityButton from "../../components/shoppingcart/ChangeQuantityButton";

const tree = create(<ChangeQuantityButton sign="+" />);

test("Snapshot for ChangeQuantityButton", () => {
  expect(tree).toMatchSnapshot();
});
