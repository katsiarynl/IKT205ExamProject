import OrderDetailsItemComponent from "../../components/OrderHisotry/OrderDetailsItemComponent";
import { create } from "react-test-renderer";

const tree = create(
  <OrderDetailsItemComponent
    name="Restaurant Name"
    description="Restaurant Description"
  />
);

test("snapshot", () => {
  expect(tree).toMatchSnapshot();
});
