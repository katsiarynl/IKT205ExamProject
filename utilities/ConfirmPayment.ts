import axios from "axios";
import { Product } from "../types/orderTypes";

async function POSTMail(cartdata: Product[], mail: string) {
  const { data } = await axios.post(
    "https://cook2go.herokuapp.com/nodemailer/" + mail + "/",

    {
      headers: {
        "Content-Type": "application/json",
      },
      data: cartdata,
    }
  );

  return await data;
}

//curl http://localhost:5000/users/ --include

export default POSTMail;
