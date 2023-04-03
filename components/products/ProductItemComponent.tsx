import React from "react";
import { Image, Text, View } from "react-native";

import products from "../../styles/products";

import AddToCartButton from "./AddToCartButton";
import PriceTagComponent from "./PriceTagComponent";
import { Product } from "../../types/productTypes";
export default function ProductItemComponent(props: Product) {
  return (
    <View>
      <View style={products.productitem}>
        <View style={products.viewProductItem}>
          <View style={{ backgroundColor: "transparent", flex: 2 }}>
            <Image
              style={products.imagestyle}
              src="https://images.pexels.com/photo/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg"
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
            <View style={products.add_to_cart_position}>
              <AddToCartButton
                _id={props._id}
                name={props.name}
                description={props.name}
                price={props.price}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
