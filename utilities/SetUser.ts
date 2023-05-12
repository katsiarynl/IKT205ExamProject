import AsyncStorage from "@react-native-async-storage/async-storage";

//https://stackoverflow.com/questions/13137350/defining-typescript-callback-type
async function SetUser(token: string, email: string, getHistory, dispatch) {
  try {
    await AsyncStorage.setItem("AccessToken", token);
    await AsyncStorage.setItem("userEmail", email);
    await getHistory(email, dispatch);
  } catch (error) {
    console.error(error);
  }
}

export default SetUser;
