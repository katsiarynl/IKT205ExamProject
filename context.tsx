import React, { useEffect, useReducer } from "react";
import { createContext } from "react";
import { Product } from "./types/productTypes";
import { RestaurantItemComponentType } from "./types/restrauntTypes";
import GETRestaurants from "./utilities/GETRestaurants";

export type ActionsType = { type: string; payload?: any };

type AppState = typeof initialState;

//reused context from the student assignment
//Extra resources: https://refine.dev/blog/usecontext-and-react-context/
//https://www.youtube.com/watch?v=5LrDIWkK_Bc&t=489s

const ACTIONS = {
  ADD_RESTAURANTS: "ADD",
  ADD_CART_ITEM: "PLACE_ORDER",
  DELETE_CART_ITEM: "REMOVE_ORDER",
  EMPTY_CART: "REMOVE_ITEMS",
};

const reducer = (state: AppState, action: ActionsType) => {
  //https://stackoverflow.com/questions/35948669/how-to-check-if-a-value-exists-in-an-object-using-javascript

  // @ts-ignore
  let entry_number: number = undefined;

  if (action.type != ACTIONS.EMPTY_CART) {
    Object(state.cartItems).map((item: Product, index: number) => {
      if (action.payload["_id"] == item["_id"]) {
        entry_number = index;
      }
    });
  }

  switch (action.type) {
    case ACTIONS.EMPTY_CART:
      state.cartItems.splice(0, state.cartItems.length);
      return { ...state };
    case ACTIONS.ADD_RESTAURANTS:
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
      return {
        ...state,
        restraunts: action.payload,
      };
    case ACTIONS.ADD_CART_ITEM:
      if (
        entry_number != undefined &&
        state.cartItems[entry_number]["quantity"] !== undefined
      ) {
        state.cartItems[entry_number]["quantity"] =
          state.cartItems[entry_number]["quantity"] + 1;

        return { ...state };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    case ACTIONS.DELETE_CART_ITEM:
      if (entry_number != undefined) {
        if (state.cartItems[entry_number]["quantity"] == 1) {
          state.cartItems.splice(entry_number, 1);
        } else {
          state.cartItems[entry_number]["quantity"] =
            state.cartItems[entry_number]["quantity"] - 1;
        }

        return { ...state };
      }

      break;
    //default is used  to return the state if no action is matched
    default:
      return state;
  }
};

type InitialStateType = {
  restraunts: RestaurantItemComponentType[];
  cartItems: Product[];
};
const initialState: InitialStateType = {
  restraunts: [],
  cartItems: [],
};

export const RestaurantContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<ActionsType>;
}>({ state: initialState, dispatch: () => undefined });

function RestaurantProvider({ children }) {
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, initialState);

  // Source: https://firebase.google.com/docs/database/web/read-and-write

  // onValue is called every time data is changed at the specified database reference
  //Source: https://firebase.google.com/docs/database/web/read-and-write

  useEffect(() => {
    GETRestaurants(dispatch);
  }, []);

  return (
    <RestaurantContext.Provider value={{ dispatch, state }}>
      {children}
    </RestaurantContext.Provider>
  );
}

export default RestaurantProvider;
