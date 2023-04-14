import axios from "axios";

async function POSTMail(cartdata) {
  const { data } = await axios.post(
    "http://10.0.0.9:5000/nodemailer",
    cartdata,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return await data;
}

//curl http://localhost:5000/users/ --include

export default POSTMail;
