import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { addressStyle } from "../../styles/addressStyle";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function AddressFormScreen() {
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleAddressSubmit = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('AccessToken');
      const email = await AsyncStorage.getItem('userEmail');
  
      const config = {
        headers: { Authorization: `Bearer ${accessToken}` },
      };
  
      const newAddress = {
        addressLine1,
        addressLine2,
        city,
        state,
        zipCode,
        email,
      };
  
      await axios.post("https://cook2go.herokuapp.com/users", newAddress, config);
      // handle success
    } catch (error) {
      // handle error
    }
  };

  return (
    <View style={addressStyle.container}>
      <Text style={addressStyle.title}>Address Form</Text>
      <View style={addressStyle.inputContainer}>
        <TextInput
          style={addressStyle.input}
          placeholder="Address Line 1"
          value={addressLine1}
          onChangeText={(text) => setAddressLine1(text)}
        />
        <TextInput
          style={addressStyle.input}
          placeholder="Address Line 2"
          value={addressLine2}
          onChangeText={(text) => setAddressLine2(text)}
        />
        <TextInput
          style={addressStyle.input}
          placeholder="City"
          value={city}
          onChangeText={(text) => setCity(text)}
        />
        <TextInput
          style={addressStyle.input}
          placeholder="State"
          value={state}
          onChangeText={(text) => setState(text)}
        />
        <TextInput
          style={addressStyle.input}
          placeholder="Zip Code"
          value={zipCode}
          onChangeText={(text) => setZipCode(text)}
        />
      </View>
      <TouchableOpacity
        style={addressStyle.button}
        onPress={handleAddressSubmit}
      >
        <Text style={addressStyle.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
