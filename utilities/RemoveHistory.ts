import { ActionsType } from "../context";
function RemoveHisotry(dispatch: React.Dispatch<ActionsType>) {
  return dispatch({ type: "REMOVE", payload: [] });
}

export default RemoveHisotry;
