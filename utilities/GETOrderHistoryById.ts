import axios from "axios";

async function GETOrderHistoryById(id: string, dispatch) {
  const response = await axios.get(
    "https://cook2go.herokuapp.com/users/" + id,

    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return dispatch({ type: "ADD", payload: response.data });
}

export default GETOrderHistoryById;
