import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//https://stackoverflow.com/questions/50436313/tab-navigator-icons-in-react-navigation

import { Feather } from "@expo/vector-icons";

import HomeComponent from "../home/HomeComponent";
import CartComponent from "../shoppingcart/CartComponent";

import { SignIn } from "../Auth/SignIn";

import ProfileComponent from "../profile/ProfileComponent";

const Tab = createBottomTabNavigator();

export default function NavigatorBarComponent() {
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
        component={SignIn}
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
        component={ProfileComponent}
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
