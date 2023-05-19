import { StyleSheet } from "react-native";

export const profileStyle = StyleSheet.create({
  ItemContent: {
    flex: 1,
  },
  userInfo: {
    paddingLeft: 20,
    width: 34,
  },
  titleText: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
    color: "blue",
  },

  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },

  drawerSection: {
    marginTop: 15,
  },
  signOuBottom: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
});
