import { ActionsType } from "../context";
const empty_cart = (dispatch: React.Dispatch<ActionsType>) => {
  return dispatch({ type: "REMOVE_ITEMS" });
};
export default empty_cart;
