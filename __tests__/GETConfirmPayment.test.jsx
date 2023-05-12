import POSTMail from "../utilities/ConfirmPayment";
//https://jestjs.io/docs/expect

describe("<App />", () => {
  test("resolves to lemon", async () => {
    const data = await POSTMail(
      [{ quantity: "1", name: "name", price: "33" }],
      "lobkovskaya@icloud.com"
    );

    return expect(data).toHaveReturned;
  });
});
