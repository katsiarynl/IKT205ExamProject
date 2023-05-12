import { ActionsType } from "./../context";

const IncreaseQuantity = (dispatch: React.Dispatch<ActionsType>, cartitem) => {
  dispatch({
    type: "PLACE_ORDER",
    payload: cartitem,
  });
};

export default IncreaseQuantity;
