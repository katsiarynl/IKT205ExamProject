import React from "react";
import { create } from "react-test-renderer";
//https://www.youtube.com/watch?v=6kM1Z5dDF-Q
const navigation = {
  navigate: jest.fn(),
};

// const tree = create.root.findByProps({ testID: "CheckoutNavigate" });

describe("<App />", () => {
  test("resolves to lemon", async () => {
    // make sure to add a return statement

    return expect(true).toBe(true);
  });
});
