import { StyleSheet } from "react-native";

export const orderHistorystyles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#FDFDFD",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  header: {
    backgroundColor: "#F2C94C",
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
  },
  headerText: {
    fontSize: 29,
    fontWeight: "bold",
    color: "#FF5A5F",
    marginLeft: 10,
  },
  orderitem: {
    backgroundColor: "#FFFAF2",
    marginBottom: 20,
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  orderNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF5A5F",
    marginBottom: 10,
  },
  orderDate: {
    fontSize: 16,
    color: "#777",
    marginBottom: 10,
  },
  orderItems: {
    marginTop: 10,
  },
  orderItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  orderItemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  orderItemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  orderItemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF5A5F",
    marginLeft: "auto",
  },
});
