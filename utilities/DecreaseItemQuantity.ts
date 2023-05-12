import { ActionsType } from "../context";
const DecreaseQuantity = (
  dispatch: React.Dispatch<ActionsType>,
  cartitem: { _id: string }
) => {
  return dispatch({
    type: "REMOVE_ORDER",
    payload: cartitem,
  });
};

export default DecreaseQuantity;
