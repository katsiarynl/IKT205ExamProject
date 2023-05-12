//https://jestjs.io/docs/expect
import ValidatePassword from "../utilities/PasswordValidation";

test("Check if password validation indeed fails if the password does not conform the requirements", async () => {
  return expect(ValidatePassword("12345")).toBe(false);
});
