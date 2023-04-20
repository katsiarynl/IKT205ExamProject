import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isloggedIn, setIsloggedIn]: [isloggedIn: any, setIsloggedIn] =
    useState<boolean>(false);

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
