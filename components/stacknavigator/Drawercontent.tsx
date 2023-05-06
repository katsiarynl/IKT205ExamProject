import { View } from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Drawer, Title, Avatar } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { profileStyle } from "../../styles/profielStyle";
import { NavigationProfileSignOut } from "../../types/navigationTypes";
import { UsersEmail } from "../userInfo/getUserInfo";
import { UserContext } from "../Auth/userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Drawercontent = (props) => {
  const navigation = useNavigation<NavigationProfileSignOut>();
  const [emailName, setEmailName] = useState<string>("");

  const ProfileNavigator = () => {
    navigation.navigate("SignOut");
  };

  const HomeNavigator = () => {
    navigation.navigate("Home");
  };

  const SignInNavigator = () => {
    navigation.navigate("SignIn");
  };
  const testhandles = () => {
    navigation.navigate("UpdateAddressForm");
  };

  const userEmailRender = () => {
    const { isuserEmail } = useContext(UserContext);

    if (isuserEmail) {
      getUser();
      return (
        <Title style={profileStyle.titleText}>
          <UsersEmail />
        </Title>
      );
    } else {
      return null;
    }
  };

  const getUser = async () => {
    try {
      const user: any = await AsyncStorage.getItem("userEmail");
      setEmailName(user);
    } catch (e) {
      console.error(e);
    }
  };

  const uri = `https://ui-avatars.com/api/?color=0000ff&name=${emailName}`;

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
          <View style={{ marginLeft: 15 }}>{userEmailRender()}</View>
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
              return <Feather name="log-in" color={"blue"} size={25} />;
            }}
            label="Sign In "
            onPress={SignInNavigator}
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
          label="Sign Out"
          onPress={ProfileNavigator}
        />
      </Drawer.Section>
    </View>
  );
};
