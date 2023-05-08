import AsyncStorage from "@react-native-async-storage/async-storage";

async function SetUser(token, email, getHistory, dispatch) {
  await AsyncStorage.setItem("AccessToken", token);
  await AsyncStorage.setItem("userEmail", email);
  await getHistory(email, dispatch);
}

export default SetUser;
