import { Text, View } from "react-native";
import React, { Component } from "react";

export default class TotalOrdersComponent extends Component {
  render() {
    return (
      <View
        style={{
          flex: 3,
          flexDirection: "column",
          backgroundColor: "transparent",
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={{
              backgroundColor: "transparent",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            {" "}
            Orders: 5
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              backgroundColor: "transparent",
            }}
          >
            {" "}
            Total: 1000
          </Text>
        </View>
      </View>
    );
  }
}
