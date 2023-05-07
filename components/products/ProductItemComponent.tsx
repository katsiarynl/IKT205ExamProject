import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import fetchImage from "../../utilities/FetchImage";
import products from "../../styles/products";

import GETPath from "../../utilities/GETPath";
import AddToCartButton from "./AddToCartButton";
import PriceTagComponent from "./PriceTagComponent";
import { Product } from "../../types/productTypes";
export default function ProductItemComponent(props: Product) {
  const [image, setImage] = useState("");
  fetchImage(GETPath, setImage, props.image);
  return (
    <View>
      <View style={products.productitem}>
        <View style={products.viewProductItem}>
          <View style={{ backgroundColor: "transparent", flex: 2 }}>
            <Image
              style={products.imagestyle}
              source={{
                uri: image,
              }}
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
                image={props.image}
                restaurant={props.restaurant}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
