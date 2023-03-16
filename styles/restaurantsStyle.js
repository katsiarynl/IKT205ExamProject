import { StyleSheet } from "react-native";
import AppLoading from "expo";

import {
  useFonts,
  Oswald_200ExtraLight,
  Oswald_300Light,
  Oswald_400Regular,
  Oswald_500Medium,
  Oswald_600SemiBold,
  Oswald_700Bold,
} from "@expo-google-fonts/oswald";

const fonts = () => {
  const [fontsLoaded] = useFonts({
    Oswald_200ExtraLight,
    Oswald_300Light,
    Oswald_400Regular,
    Oswald_500Medium,
    Oswald_600SemiBold,
    Oswald_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
};

export const restaurantStyle = StyleSheet.create({
  cardStyle: {
    backgroundColor: "#ffff",
    marginBottom: 13,
    padding: 12,
  },
  coverStyle: {
    backgroundColor: "#D9D9D9",
    padding: "1%",
  },
  title: {
    padding: 20,
    fontSize: 23,
    fontWeight: "bold",
    paddingBottom: "3%",
  },
  address: {
    padding: 20,
    fontSize: 23,
  },
  starRatingStyle: {
    flexDirection: "row",
    paddingTop: "0.2%",
    paddingHorizontal: "4%",
  },
});
