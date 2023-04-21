import POSTMail from "../utilities/ConfirmPayment";
//https://jestjs.io/docs/expect

describe("<App />", () => {
  test("resolves to lemon", async () => {
    // make sure to add a return statement
    const data = await POSTMail({ key: "value" });
    return expect(data).toHaveReturned;
    // return expect(true).toBe(true);
  });
});
