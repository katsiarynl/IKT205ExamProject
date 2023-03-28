import axios from "axios";

async function POSTStripe(cartdata) {
  const { data } = await axios.post(cartdata, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await data;
}

//curl http://localhost:5000/users/ --include

export default POSTStripe;
