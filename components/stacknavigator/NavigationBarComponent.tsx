import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//https://stackoverflow.com/questions/50436313/tab-navigator-icons-in-react-navigation
import { Feather } from "@expo/vector-icons";
import React from "react";
import Main from "../../Main";
import HomeComponent from "../home/HomeComponent";
import CartComponent from "../shoppingcart/CartComponent";
import StripePaymentComponent from "../payment/StripePaymentComponent";
const Tab = createBottomTabNavigator();
//navigator
export default function NavigatorBarComponent(props) {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeComponent}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={StripePaymentComponent}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color }) => (
            <AntDesign name="hearto" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartComponent}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color }) => (
            <AntDesign name="shoppingcart" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Main}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
