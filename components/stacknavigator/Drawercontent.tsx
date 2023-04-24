import { View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Drawer, Title, Avatar } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { profileStyle } from "../../styles/profielStyle";
import { NavigationProfileSignOut } from "../../types/navigationTypes";

export const Drawercontent = (props) => {
  const TestUsername = "zekaria";
  const navigation = useNavigation<NavigationProfileSignOut>();
  const uri = `https://ui-avatars.com/api/${TestUsername}`;
  const ProfileNavigator = () => {
    navigation.navigate("SignOut");
  };

  const HomeNavigator = () => {
    navigation.navigate("Home");
  };
  const testhandles = () => {
    console.error("is Pressed!  just test");
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={profileStyle.ItemContent}>
          <View style={profileStyle.userInfo}>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <Avatar.Image
                source={{
                  uri: uri,
                }}
                size={80}
              />
            </View>
          </View>
          <View style={{ marginLeft: 15 }}>
            <Title style={profileStyle.titleText}>zekaria @gmail.ocm</Title>
          </View>
        </View>
        <Drawer.Section style={profileStyle.drawerSection}>
          <DrawerItem
            icon={() => {
              return <Feather name="home" color={"blue"} size={25} />;
            }}
            label="Home"
            onPress={HomeNavigator}
          />
          <DrawerItem
            icon={() => {
              return <Feather name="user" color={"blue"} size={25} />;
            }}
            label="Profile "
            onPress={testhandles}
          />
          <DrawerItem
            icon={() => {
              return <Feather name="edit" color={"blue"} size={25} />;
            }}
            label="Address"
            onPress={testhandles}
          />
          <DrawerItem
            icon={() => {
              return <Feather name="shopping-bag" color={"blue"} size={25} />;
            }}
            label="Order History"
            onPress={testhandles}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={profileStyle.signOuBottom}>
        <DrawerItem
          icon={() => {
            return <Feather name="log-out" color={"blue"} size={25} />;
          }}
          label="sign Out"
          onPress={ProfileNavigator}
        />
      </Drawer.Section>
    </View>
  );
};
