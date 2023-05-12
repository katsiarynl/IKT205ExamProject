import { ActionsType } from "../components/Auth/userContext";
const DecreaseQuantity = (dispatch: React.Dispatch<ActionsType>, cartitem) => {
  dispatch({
    type: "REMOVE_ORDER",
    payload: cartitem,
  });
};

export default DecreaseQuantity;
