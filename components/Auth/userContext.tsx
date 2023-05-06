import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type InitialStateType = {
  isloggedIn: boolean;
  setIsloggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  isuserEmail: boolean;
  setIsuserEmail: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialState: InitialStateType = {
  isloggedIn: false,
  setIsloggedIn: () => undefined,
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [isloggedIn, setIsloggedIn] = useState<boolean>(false);
  const [isuserEmail, setIsuserEmail] = useState<boolean>(false);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const token = await AsyncStorage.getItem("AccessToken");
        const userEmail = await AsyncStorage.getItem("userEmail");

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
      value={{ isloggedIn, setIsloggedIn, isuserEmail, setIsuserEmail }}
    >
      {children}
    </UserContext.Provider>
  );
};
