//https://jestjs.io/docs/expect
import ValidatePassword from "../utilities/PasswordValidation";

describe("<App />", () => {
  test("resolves to lemon", async () => {
    return expect(ValidatePassword("123456")).toBe(true);
  });
});
