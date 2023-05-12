import { GeneralProductQ } from "../types/orderTypes";
import { ActionsType } from "./../context";

const IncreaseQuantity = (dispatch: React.Dispatch<ActionsType>, cartitem: {_id: string}) => {
  return dispatch({
    type: "PLACE_ORDER",
    payload: cartitem,
  });
};

export default IncreaseQuantity;
