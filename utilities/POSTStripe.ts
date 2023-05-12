import axios from "axios";
import { GeneralProductQ } from "../types/orderTypes";

async function POSTStripe(cartdata: GeneralProductQ[]) {
  const { data } = await axios.post(
    "https://cook2go.herokuapp.com/create-checkout-session",
    cartdata,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return data;
}

//curl http://localhost:5000/users/ --include

export default POSTStripe;
