import axios from "axios";

async function POSTMail(cartdata) {
  const { data } = await axios.post(
    "https://cook2go.herokuapp.com/nodemailer",
    {
      headers: {
        Accept: "application/json",
      },
      data: cartdata,
    }
  );

  return await data;
}

//curl http://localhost:5000/users/ --include

export default POSTMail;
