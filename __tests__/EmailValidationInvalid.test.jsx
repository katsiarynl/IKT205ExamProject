//https://jestjs.io/docs/expect
import ValidateEmail, { EmailsValidation } from "../utilities/EmailValidation";

test("Chekc if validation email returns true when the email is correct", async () => {
  return expect(ValidateEmail("test.emailemail.com")).not.toBe(true);
});
