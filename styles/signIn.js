import { StyleSheet } from "react-native";

export const signInStyle = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#7E3B14",
    alignSelf: "center",
    paddingBottom: 24,
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "#fff",
    borderTopLeftRadius: 100,
  },

  form: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
    margin: 12,
  },
  inputs: {
    width: "100%",
    backgroundColor: "#9897",
    borderBottomWidth: 1,
    height: 59,
    marginBottom: 10,
    fontSize: 30,
    borderRadius: 10,
    padding: 12,
    flexDirection: "row",
    minWidth: 50,
  },
  button: {
    backgroundColor: "#7E3B14",
    height: 58,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 69,
  },
  buttonSocial: {
    height: 58,
    borderRadius: 10,
    width: "100%",
  },
  emailICon: {
    padding: 10,
    paddingVertical: 12,
  },

  inputs2: {
    width: "100%",
    backgroundColor: "#9897",
    height: 58,
    marginBottom: 10,
    fontSize: 23,
    borderRadius: 10,
    padding: 12,
    flexDirection: "row",
    borderBottomWidth: 1,
  },
  orTextStyle: {
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 12,
    alignSelf: "center",
  },
  googleStyle: {
    height: 58,
    borderRadius: 10,
    width: "100%",
  },

  textSingUp: {
    color: "grey",
    fontWeight: "600",
    fontSize: 16,
  },

  singUpContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});
