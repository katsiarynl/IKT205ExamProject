import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type InitialStateType = {
  isloggedIn: boolean;
  setIsloggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};
const initialState: InitialStateType = {
  isloggedIn: false,
  setIsloggedIn: () => undefined,
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [isloggedIn, setIsloggedIn] = useState<boolean>(false);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const token = await AsyncStorage.getItem("AccessToken");

        if (token) {
          setIsloggedIn(true);
        } else {
          setIsloggedIn(false);
        }
      } catch (error) {
        console.error("Error user logging! :", error);
      }
    };

    checkUserLoggedIn();
  }, []);

  return (
    <UserContext.Provider value={{ isloggedIn, setIsloggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
