import POSTStripe from "../utilities/POSTStripe";
//https://jestjs.io/docs/expect

describe("stripe", () => {
  test("resolves to lemon", async () => {
    // make sure to add a return statement
    const path = await POSTStripe([
      {
        cartQuantity: 1,
        name: "name",
        price: 24,
      },
    ]);

    return expect(path).toHaveReturned;
  });
});
