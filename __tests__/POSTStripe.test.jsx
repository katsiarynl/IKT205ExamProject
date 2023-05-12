import POSTStripe from "../utilities/POSTStripe";
//https://jestjs.io/docs/expect

describe("stripe", () => {
  test("Check if POSTStripe function works properly  ", async () => {
    const path = await POSTStripe([
      {
        quantity: 1,
        name: "name",
        price: 24,
      },
    ]);

    return expect(path).toHaveReturned;
  });
});
