import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActionsType } from "../context";
//https://stackoverflow.com/questions/13137350/defining-typescript-callback-type
async function SetUser(
  token: string,
  email: string,
  getHistory,
  dispatch: React.Dispatch<ActionsType>
) {
  try {
    await AsyncStorage.setItem("AccessToken", token);
    await AsyncStorage.setItem("userEmail", email);
    await getHistory(email, dispatch);
  } catch (error: any) {
    console.error(error);
  }
}

export default SetUser;
