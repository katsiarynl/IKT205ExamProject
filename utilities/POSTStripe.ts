import axios from "axios";
import { GeneralProductQ } from "../types/orderTypes";
import GetTokenAndId from "./GetTokenAndId";

async function POSTStripe(cartdata: GeneralProductQ[]) {
  const { email } = await GetTokenAndId();
  const { data } = await axios.post(
    "https://cook2go.herokuapp.com/create-checkout-session/" + email + "/",
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
