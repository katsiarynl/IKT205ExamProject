import axios from "axios";

async function GETStripe() {
  const response = await axios.get(
    "http://10.0.0.9:5000/create-checkout-session/"
  );
  const values = await response.data;

  const greeting: string = values;

  return greeting;
}

//curl http://localhost:5000/users/ --include

export default GETStripe;
