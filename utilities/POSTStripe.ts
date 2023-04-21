import axios from "axios";

async function POSTStripe(cartdata) {
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
