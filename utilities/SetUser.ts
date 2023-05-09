import AsyncStorage from "@react-native-async-storage/async-storage";

async function SetUser(token, email, getHistory, dispatch) {
  try {
    await AsyncStorage.setItem("AccessToken", token);
    await AsyncStorage.setItem("userEmail", email);
    await getHistory(email, dispatch);
  } catch (error) {
    console.error(error);
  }
}

export default SetUser;
