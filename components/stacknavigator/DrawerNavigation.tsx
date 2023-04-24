import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeComponent from "../home/HomeComponent";
import { Drawercontent } from "./Drawercontent";

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <Drawercontent {...props} />}>
      <Drawer.Screen name="Home" component={HomeComponent} />
    </Drawer.Navigator>
  );
};
