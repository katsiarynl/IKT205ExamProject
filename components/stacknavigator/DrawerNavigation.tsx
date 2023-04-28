import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Drawercontent } from "./Drawercontent";

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <Drawercontent {...props} />}
    >
      <Drawer.Screen name="ItemProfile" component={Drawercontent} />
    </Drawer.Navigator>
  );
};
