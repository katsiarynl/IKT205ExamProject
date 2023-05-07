import axios from "axios";

async function GETOrderHistoryById(id: string, dispatch) {
  console.log("GETHISOTRY");
  const response = await axios.get(
    "http://10.0.0.9:5000/users/" + id,

    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log("GETHISOTRY");
  console.log(response.data);

  dispatch(
    (() => {
      return { type: "ADD", payload: response.data };
    })()
  );
}

export default GETOrderHistoryById;
