import GETPath from "../utilities/GETPath";
//https://jestjs.io/docs/expect

test("Check if GETPATH function works ", async () => {
  const path = await GETPath("gs://cooktogo-cec09.appspot.com/image11.jpg");
  return expect(path.data).toHaveReturned;
});
