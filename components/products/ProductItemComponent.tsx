import React from "react";
import { Image, Text, View } from "react-native";

import products from "../../styles/products";

import AddToCartButton from "./AddToCartButton";
import PriceTagComponent from "./PriceTagComponent";
import { Product } from "../../types/product";
export default function ProductItemComponent(props: Product) {
  return (
    <View>
      <View style={products.productitem}>
        <View style={products.viewProductItem}>
          <View style={{ backgroundColor: "transparent", flex: 2 }}>
            <Image
              style={{
                width: "100%",
                height: "100%",
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
              }}
              src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg"
            />
          </View>
          <View
            style={{
              backgroundColor: "white",
              flex: 3,
              flexDirection: "column",
            }}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Text style={{ flex: 1, fontSize: 20 }}>{props.name}</Text>
              <PriceTagComponent price={props.price} />
            </View>
            <View style={{ flex: 2 }}>
              <Text style={{ fontWeight: "bold" }}> Ingredients: </Text>
              <Text>{props.description}</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AddToCartButton
                id={props.id}
                product_name={props.name}
                product_description={props.name}
                product_price={props.price}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
