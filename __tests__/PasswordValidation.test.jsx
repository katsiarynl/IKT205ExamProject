//https://jestjs.io/docs/expect
import ValidatePassword from "../utilities/PasswordValidation";

test("Check if password validation works properly", async () => {
  return expect(ValidatePassword("123456")).toBe(true);
});
