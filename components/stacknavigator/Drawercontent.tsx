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
import { checkIfAddressExists } from "../../utilities/checkAddress";
import HistoryIconComponent from "./HistoryIconComponent";
import SignInIcon from "./SignInIcon";
import HomeIconComponent from "./HomeIconComponent";

import { SignOut } from "../Auth/SignOut";
import ForgotPasswordIcon from "./ForgotPasswordIcon";

export const Drawercontent = (props) => {
  const navigation = useNavigation<NavigationProfileSignOut>();
  const [emailName, setEmailName] = useState<string>("");
  const { isloggedIn } = useContext(UserContext);

  // const HomeNavigator = () => {
  //   navigation.navigate("Home");
  // };

  // const SignInNavigator = () => {
  //   navigation.navigate("SignIn");
  // };
  const addressHandle = async () => {
    const addressExists = await checkIfAddressExists();
    if (addressExists) {
      navigation.navigate("UpdateAddressForm");
    } else if (!isloggedIn) {
      navigation.navigate("SignIn");
    } else {
      navigation.navigate("AddressForm");
    }
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
          {isloggedIn ? <ForgotPasswordIcon /> : <SignInIcon />}
          <HomeIconComponent />
          <SignInIcon />
          <DrawerItem
            icon={() => {
              return <Feather name="edit" color={"blue"} size={25} />;
            }}
            label="Address"
            onPress={addressHandle}
          />
          <HistoryIconComponent />
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={profileStyle.signOuBottom}>
        {isloggedIn ? <SignOut /> : null}
      </Drawer.Section>
    </View>
  );
};
