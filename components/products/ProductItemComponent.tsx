import { View, Text } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import products from "../../styles/products";
import AddToCartButton from "./AddToCartButton";
import { Image } from "react-native";
import PriceTagComponent from "./PriceTagComponent";

export default function ProductItemComponent(props) {
  return (
    <View>
      <Card style={products.productitem}>
        <View style={products.viewProductItem}>
          <View style={{ backgroundColor: "transparent", flex: 2 }}>
            <Image
              style={{
                width: "100%",
                height: "100%",
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
              }}
              src={
                "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg"
              }
            />
          </View>
          <View
            style={{
              backgroundColor: "grey",
              flex: 3,
              flexDirection: "column",
            }}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Text style={{ flex: 1, fontSize: 20 }}>
                {props["productobject"]["name"]}
              </Text>
              <PriceTagComponent price={props["productobject"]["price"]} />
            </View>
            <View style={{ flex: 2 }}>
              <Text style={{ fontWeight: "bold" }}> Ingredients: </Text>
              <Text>{props.productobject.description}</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AddToCartButton />
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
}
