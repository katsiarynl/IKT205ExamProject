import React, { createContext, useState, useEffect, useReducer } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GETOrderHistoryById from "../../utilities/GETOrderHistoryById";
export type ActionsType = { type: string; payload: any };

type AppState = typeof initialState;
const ACTIONS = {
  ADD_HISTORY: "ADD",
  REMOVE_HISTORY: "REMOVE",
};

const reducer = (state: AppState, action: ActionsType) => {
  console.log(" i am here");
  switch (action.type) {
    case ACTIONS.ADD_HISTORY:
      return {
        ...state,
        history: action.payload,
      };
    case ACTIONS.REMOVE_HISTORY:
      return { ...state, history: [] };
  }
};

type InitialStateType = {
  isloggedIn: boolean;
  setIsloggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  isuserEmail: boolean;
  setIsuserEmail: React.Dispatch<React.SetStateAction<boolean>>;
  state: initialStateHistoryType;
  dispatchUser: React.Dispatch<ActionsType>;
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
  const [state, dispatchUser] = useReducer(reducer, initialStateHistory);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const token = await AsyncStorage.getItem("AccessToken");
        const userEmail = await AsyncStorage.getItem("userEmail");
        GETOrderHistoryById(userEmail, dispatchUser);
        if (token || userEmail) {
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
        dispatchUser,
        state,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
