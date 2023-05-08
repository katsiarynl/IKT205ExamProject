import AsyncStorage from "@react-native-async-storage/async-storage";

async function GetTokenAndId() {
  const token = await AsyncStorage.getItem("AccessToken");
  const email = await AsyncStorage.getItem("userEmail");

  return { token: token, email: email };
}
export default GetTokenAndId;
