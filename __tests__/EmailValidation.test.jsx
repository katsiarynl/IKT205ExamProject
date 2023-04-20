//https://jestjs.io/docs/expect
import { EmailsValidation } from "../utilities/EmailValidation";

describe("<App />", () => {
  test("resolves to lemon", async () => {
    return expect(EmailsValidation.test("test.email@email.com")).toBe(true);
  });
});
