import { Total } from "../components/shoppingcart/TotalOrdersComponent";

import React from "react";
import { create } from "react-test-renderer";

test("snapshot", () => {
  const totalPrice = Total([
    { quantity: 5, price: 10 },
    { quantity: 3, price: 5 },
  ]);
  expect(totalPrice).toBe(65);
});
