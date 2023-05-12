import React from "react";
import axios from "axios";
import { ActionsType } from "../context";

async function GETRestaurants(dispatch: React.Dispatch<ActionsType>) {
  const response = await axios.get("https://cook2go.herokuapp.com/restraunts");

  return dispatch({ type: "ADD", payload: response.data });
}

//curl http://localhost:5000/users/ --include

export default GETRestaurants;
