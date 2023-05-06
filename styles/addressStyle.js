import { StyleSheet } from "react-native";

export const addressStyle = StyleSheet.create({
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
    padding: 20,
  },

  inputContainer: {
    marginTop: 20,
  },

  input: {
    width: "100%",
    backgroundColor: "#F0F0F0",
    height: 50,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    fontSize: 18,
  },

  button: {
    backgroundColor: "#7E3B14",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
