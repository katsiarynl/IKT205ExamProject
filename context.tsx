import React, { useEffect, useReducer } from "react";
import { createContext } from "react";
import GETBlogs from "./utilities/GETBlogs";

export type ActionsType = { type: string; payload: any };

type AppState = typeof initialState;

//we were struggling to create a good context. therefore we asked the assistant for help during one of the ikt205 labs
//
//Extra resources: https://refine.dev/blog/usecontext-and-react-context/
//https://www.youtube.com/watch?v=5LrDIWkK_Bc&t=489s

const ACTIONS = {
  ADD_STUDENT: "ADD",
  ADD_CART_ITEM: "PLACE_ORDER",
};

const reducer = (state: AppState, action: ActionsType): AppState => {
  console.log("REDUCER STARTED");
  if (action.type == ACTIONS.ADD_CART_ITEM) {
    console.log("THE ID IS");
  }
  switch (action.type) {
    case ACTIONS.ADD_STUDENT:
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
      return {
        ...state,
        dishes: action.payload,
      };
    case ACTIONS.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        cartQuantity: 6,
      };

    //default is used  to return the state if no action is matched
    default:
      return state;
  }
};

type InitialStateType = {
  dishes: [];
  cartItem: [];
  cartQuantity: number;
};
const initialState: InitialStateType = {
  dishes: [],
  cartItema: [],
  cartQuantity: 0,
};

export const StudentContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<ActionsType>;
}>({ state: initialState, dispatch: () => undefined });

function StudentProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Source: https://firebase.google.com/docs/database/web/read-and-write

  // onValue is called every time data is changed at the specified database reference
  //Source: https://firebase.google.com/docs/database/web/read-and-write

  useEffect(() => {
    GETBlogs(dispatch);
  }, []);

  return (
    <StudentContext.Provider value={{ dispatch, state }}>
      {children}
    </StudentContext.Provider>
  );
}

export default StudentProvider;
