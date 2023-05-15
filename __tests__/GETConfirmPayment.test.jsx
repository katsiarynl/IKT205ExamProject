import POSTMail from "../utilities/ConfirmPayment";
//https://jestjs.io/docs/expect

test("Check if POSTMail function works", async () => {
  const data = await POSTMail(
    [{ quantity: "1", name: "name", price: "33" }],
    "mock@icloud.com"
  );

  return expect(data).toHaveReturned;
});
