import { StyleSheet } from "react-native";

export const restaurantStyle = StyleSheet.create({
  cardStyle: {
    backgroundColor: "#F5F5F5",
    marginBottom: 13,
    padding: 12,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
  },
  coverStyle: {
    backgroundColor: "#D9D9D9",
    padding: 12,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF5A5F",
    marginBottom: 8,
    textAlign: "center",
  },
  address: {
    fontSize: 18,
    fontWeight: "700",
    color: "#555555",
    fontStyle: "italic",
    textAlign: "center",
  },
  starRatingStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    textAlign: "center",
  },
});
