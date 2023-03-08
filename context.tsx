import React, { useEffect, useReducer } from "react";

import { createContext } from "react";
import { View } from "react-native/Libraries/Components/View/View";

import GETBlogs from "./utilities/GETBlogs";
type ActionsType = { type: string; payload: any };

//we were struggling to create a good context. therefore we asked the assistant for help during one of the ikt205 labs
//
//Extra resources: https://refine.dev/blog/usecontext-and-react-context/
//https://www.youtube.com/watch?v=5LrDIWkK_Bc&t=489s

const ACTIONS = {
  ADD_STUDENT: "add-student",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_STUDENT:
      console.log("The payload is");
      console.log(action.payload);
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
      return {
        ...state,
        dishes: action.payload,
      };
    //default is used  to return the state if no action is matched
    default:
      return state;
  }
};

const initialState = {
  dishes: [],
};

async function Print(callback, disp) {
  const b = await callback();
  disp({
    type: ACTIONS.ADD_STUDENT,
    payload: b || [],
  });
}

type AppState = typeof initialState;
const blog = { title: "test", content: "test", author: "test" };
let TestValue = TestBranchL;

export const StudentContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<ActionsType>;
}>({ state: initialState, dispatch: () => undefined });

function StudentProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Source: https://firebase.google.com/docs/database/web/read-and-write

    Print(GETBlogs, dispatch);

    //Source: https://firebase.google.com/docs/database/web/read-and-write
    //https://www.youtube.com/watch?v=5LrDIWkK_Bc&t=489s
  }, []);

  return (
    <StudentContext.Provider value={{ state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
}

export default StudentProvider;
