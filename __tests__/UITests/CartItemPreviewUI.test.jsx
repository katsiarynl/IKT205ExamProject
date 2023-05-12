import CartItemPreviewComponent from "../../components/shoppingcart/CartItemPreviewComponent";
import { create } from "react-test-renderer";
const tree = create(
  <CartItemPreviewComponent name="Name" price="price" quantity="3" _id="id" />
);

test("snapshot", () => {
  expect(tree).toMatchSnapshot();
});
