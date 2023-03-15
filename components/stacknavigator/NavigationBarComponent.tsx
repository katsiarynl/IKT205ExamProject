import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
//https://stackoverflow.com/questions/50436313/tab-navigator-icons-in-react-navigation
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import TouchableOpacity, { Pressable } from "react-native";
const Tab = createBottomTabNavigator();
import Main from "../../Main";
import { Feather } from "@expo/vector-icons";
import HomeComponent from "../home/HomeComponent";
import CartComponent from "../shoppingcart/CartComponent";
import FavoritesCompoenent from "../favorites/FavoritesComponent";
import ProfileComponent from "../profile/ProfileComponent";
export default function NavigatorBarComponent() {
  const [color, setColor] = useState("green");
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeComponent}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesCompoenent}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hearto" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartComponent}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shoppingcart" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileComponent}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
