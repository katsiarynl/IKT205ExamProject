import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getUserByEmail = async () => {
  try {
    const userEmail = await AsyncStorage.getItem("userEmail");

    return userEmail;
  } catch (e) {
    console.error(e);
  }
};

export const UsersEmail = () => {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    getUserByEmail().then((userEmail: string | any) => setUserEmail(userEmail));
  }, []);

  return <Text>{userEmail}</Text>;
};
