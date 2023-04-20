import GETPath from "../utilities/GETPath";
//https://jestjs.io/docs/expect
import useContext from "react";
describe("<App />", () => {
  test("resolves to lemon", async () => {
    // make sure to add a return statement
    const path = await GETPath("gs://cooktogo-cec09.appspot.com/image11.jpg");
    return expect(path.data).toHaveReturned;
  });
});
