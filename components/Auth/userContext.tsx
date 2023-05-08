import React, { createContext, useState, useEffect, useReducer } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GETOrderHistoryById from "../../utilities/GETOrderHistoryById";
import { Product } from "../../types/productTypes";
export type ActionsType = { type: string; payload: any };

type AppState = typeof initialStateHistory;
const ACTIONS = {
  ADD_HISTORY: "ADD",
  REMOVE_HISTORY: "REMOVE",
};

const reducer = (state: AppState, action: ActionsType) => {
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
  state: initialStateHistoryType;
  dispatchUser: React.Dispatch<ActionsType>;
};
type initialStateHistoryType = {
  history: any;
};

const initialStateHistory: initialStateHistoryType = {
  history: [],
};
interface InitialStateTypeWithHistory extends InitialStateType {
  isloggedIn: boolean;
  setIsloggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  isuserEmail: boolean;
  setIsuserEmail: React.Dispatch<React.SetStateAction<boolean>>;

  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};


const initialState: InitialStateTypeWithHistory = {
  isloggedIn: false,
  setIsloggedIn: () => undefined,
  state: initialStateHistory,
  setIsuserEmail: () => undefined,
  isuserEmail: false,
  dispatchUser: () => undefined,
  setIsLoading: () => undefined,
  isLoading: false,
  
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [isloggedIn, setIsloggedIn] = useState<boolean>(false);
  const [isuserEmail, setIsuserEmail] = useState<boolean>(false);

  // @ts-ignore
  const [state, dispatchUser] = useReducer(reducer, initialStateHistory);

  const [isLoading, setIsLoading] = useState<boolean>(false);


  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const token = await AsyncStorage.getItem("AccessToken");
        const userEmail = await AsyncStorage.getItem("userEmail");

        if (token && userEmail) {
          GETOrderHistoryById(userEmail, dispatchUser);
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
        isLoading,
        setIsLoading,

      }}
    >
      {children}
    </UserContext.Provider>
  );
};
