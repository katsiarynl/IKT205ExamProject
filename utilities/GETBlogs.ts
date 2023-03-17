import React from "react";
import axios from "axios";
import { ActionsType } from "../context";

async function GETBlogs(dispatch: React.Dispatch<ActionsType>) {
  const response = await axios.get("https://cook2go.herokuapp.com/restraunts");

  dispatch(
    (() => {
      return { type: "ADD", payload: response.data };
    })()
  );
  console.log("after  response");
}

//curl http://localhost:5000/users/ --include

export default GETBlogs;
