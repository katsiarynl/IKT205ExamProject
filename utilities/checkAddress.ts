import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const checkIfAddressExists = async () => {
    
  try {
    const accessToken = await AsyncStorage.getItem('AccessToken');
    const userEmail = await AsyncStorage.getItem('userEmail');
    console.log("userEmail: " + userEmail);
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };
    const response = await axios.get(`https://cook2go.herokuapp.com/users/${userEmail}`);
    return response.data
  } catch (error) {
    console.log(error);
    return false;
  }
};
