//https://jestjs.io/docs/expect
import ValidateEmail, { EmailsValidation } from "../utilities/EmailValidation";

describe("<App />", () => {
  test("resolves to lemon", async () => {
    return expect(ValidateEmail("test.email@email.com")).toBe(true);
  });
});
