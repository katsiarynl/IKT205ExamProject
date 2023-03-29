import axios from "axios";

async function GETStripe() {
  const response = await axios.get(
    "https://cook2go.herokuapp.com/create-checkout-session"
  );
  const values = await response.data;

  const greeting: string = values;

  return greeting;
}

//curl http://localhost:5000/users/ --include

export default GETStripe;
