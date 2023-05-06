import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";
import { ScrollView } from "react-native-gesture-handler";
import OrderItemComponent from "./OrderItemComponent";
import POSTOrder from "../../utilities/POSTOrder";
import GETOrderHistoryById from "../../utilities/GETOrderHistoryById";
import { UserContext } from "../Auth/userContext";
import { useNavigation } from "@react-navigation/native";

export default function OrderHisoryListComponent() {
  const { state } = useContext(UserContext);
  const navigator = useNavigation();
  return (
    <View style={{ flex: 12 }}>
      <ScrollView>
        {state.history.orders.map((order) => {
          console.log(order);
          return <OrderItemComponent orders={order} />;
        })}
        <Pressable onPress={() => navigator.navigate("orders")}>
          <View style={{ width: 100, height: 300 }}>
            <Text>PRESS</Text>
          </View>
        </Pressable>
      </ScrollView>
      <Text>OrderHisoryListComponent</Text>
    </View>
  );
}
