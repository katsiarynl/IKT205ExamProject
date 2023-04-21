import React from "react";
import { create } from "react-test-renderer";

import RestrauntComponent from "../components/restrauntdetails/RestrauntComponent";
const tree = create(<RestrauntComponent />);

test("snapshot", () => {
  expect(tree).toMatchSnapshot();
});
