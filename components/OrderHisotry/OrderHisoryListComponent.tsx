import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";
import { ScrollView } from "react-native-gesture-handler";
import OrderItemComponent from "./OrderItemComponent";
import POSTOrder from "../../utilities/POSTOrder";
import GETOrderHistoryById from "../../utilities/GETOrderHistoryById";
import { UserContext } from "../Auth/userContext";
import { useNavigation } from "@react-navigation/native";
import GetTokenAndId from "../../utilities/GetTokenAndId";

export default function OrderHisoryListComponent() {
  const { state } = useContext(UserContext);
  const navigator = useNavigation();
  const token = GetTokenAndId();
  return (
    <View style={{ flex: 12 }}>
      <ScrollView>
        {state.history.orders.map((order) => {
          console.log(order);
          return <OrderItemComponent orders={order} />;
        })}
        <Pressable onPress={() => console.log(state)}>
          <View style={{ width: 100, height: 300 }}>
            <Text>PRESS</Text>
          </View>
        </Pressable>
      </ScrollView>
      <Text>OrderHisoryListComponent</Text>
    </View>
  );
}
