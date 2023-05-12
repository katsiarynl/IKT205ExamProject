import axios from "axios";
import { GeneralProductQ } from "../types/orderTypes";

async function POSTOrder(order: GeneralProductQ, id: string) {
  const { data } = await axios.put(
    "https://cook2go.herokuapp.com/users/" + id,

    {
      headers: {
        "Content-Type": "application/json",
      },
      data: order,
    }
  );

  return data;
}

//curl http://localhost:5000/users/ --include

export default POSTOrder;
