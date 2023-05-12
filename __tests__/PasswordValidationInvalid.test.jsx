//https://jestjs.io/docs/expect
import ValidatePassword from "../utilities/PasswordValidation";

describe("<App />", () => {
  test("resolves to lemon", async () => {
    return expect(ValidatePassword("12345")).toBe(false);
  });
});
