import { StyleSheet } from "react-native";

export const forgetPassStyle = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  containerFor: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "#fff",
    borderTopLeftRadius: 100,
  },

  inputs: {},
  emailICon: {
    padding: 10,
    paddingVertical: 12,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
    margin: 12,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#7E3B14",
    alignSelf: "center",
    paddingBottom: 59,
  },
  button: {
    backgroundColor: "#7E3B14",
    height: 58,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
});
