import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { addressStyle } from "../../styles/addressStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";

export default function UpdateAddressForm() {
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const getUserAddress = async () => {
      try {
        const accessToken = await AsyncStorage.getItem("AccessToken");
        const email = await AsyncStorage.getItem("userEmail");

        const config = {
          headers: { Authorization: `Bearer ${accessToken}` },
        };

        const response = await axios.get(
          `https://cook2go.herokuapp.com/user/${email}`,
          config
        );
        const userAddress = response.data;
        setAddressLine1(userAddress.addressLine1);
        setAddressLine2(userAddress.addressLine2);
        setCity(userAddress.city);
        setState(userAddress.state);
        setZipCode(userAddress.zipCode);
      } catch (error) {
        console.error(error);
      }
    };

    getUserAddress();
  }, []);

  const handleAddressSubmit = async () => {
    try {
      const accessToken = await AsyncStorage.getItem("AccessToken");
      const email = await AsyncStorage.getItem("userEmail");

      const config = {
        headers: { Authorization: `Bearer ${accessToken}` },
      };

      const updatedAddress = {
        addressLine1,
        addressLine2,
        city,
        state,
        zipCode,
      };

      await axios.put(
        `https://cook2go.herokuapp.com/user/${email}`,
        updatedAddress,
        config
      );
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={addressStyle.container}>
      <Text style={addressStyle.title}>Edit Address Form</Text>
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
        <Text style={addressStyle.buttonText}>Save Address</Text>
      </TouchableOpacity>
    </View>
  );
}
