import React, { createContext, useState, useEffect, useReducer } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GETOrderHistoryById from "../../utilities/GETOrderHistoryById";
export type ActionsType = { type: string; payload: any };

type AppState = typeof initialState;
const ACTIONS = {
  ADD_HISTORY: "ADD",
};

const reducer = (state: AppState, action: ActionsType) => {
  switch (action.type) {
    case ACTIONS.ADD_HISTORY:
      return {
        ...state,
        history: action.payload,
      };
  }
};

type InitialStateType = {
  isloggedIn: boolean;
  setIsloggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  isuserEmail: boolean;
  setIsuserEmail: React.Dispatch<React.SetStateAction<boolean>>;
  state: initialStateHistoryType;
  dispatch: React.Dispatch<ActionsType>;
};
type initialStateHistoryType = {
  history: [];
};

const initialStateHistory: initialStateHistoryType = {
  history: [],
};

const initialState: InitialStateType = {
  isloggedIn: false,
  setIsloggedIn: () => undefined,
  state: initialStateHistory,
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [isloggedIn, setIsloggedIn] = useState<boolean>(false);
  const [isuserEmail, setIsuserEmail] = useState<boolean>(false);
  const [state, dispatch] = useReducer(reducer, initialStateHistory);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const token = await AsyncStorage.getItem("AccessToken");
        const userEmail = await AsyncStorage.getItem("userEmail");

        if (token || userEmail) {
          GETOrderHistoryById("YZU5Go5XQYQV4ZjfJcM4mY8XVFo1", dispatch);
          setIsloggedIn(true);
          setIsuserEmail(true);
        } else {
          setIsloggedIn(false);
          setIsuserEmail(false);
        }
      } catch (error) {
        console.error("Error user logging! :", error);
      }
    };

    checkUserLoggedIn();
  }, []);

  return (
    <UserContext.Provider
      value={{
        isloggedIn,
        setIsloggedIn,
        isuserEmail,
        setIsuserEmail,
        dispatch,
        state,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
