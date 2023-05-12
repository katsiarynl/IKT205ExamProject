import { Total } from "../components/shoppingcart/TotalOrdersComponent";

test("Check if the total price is calculated correctly", () => {
  const totalPrice = Total([
    { quantity: 5, price: 10 },
    { quantity: 3, price: 5 },
  ]);
  expect(totalPrice).toBe(65);
});
