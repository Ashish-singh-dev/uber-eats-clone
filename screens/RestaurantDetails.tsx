import { View } from "react-native";
import React from "react";
import About from "../components/restaurantDetails/About";
import ItemSeperator from "../components/common/ItemSeperator";
import MenuItems from "../components/restaurantDetails/MenuItems";
import { StatusBar } from "expo-status-bar";
import ViewCart from "../components/restaurantDetails/ViewCart";

const RestaurantDetails = (props: any) => {
  return (
    <View style={{ flex: 1 }}>
      <About route={props.route} />
      <ItemSeperator maringTop={10} marginBottom={10} />
      <MenuItems restaurantName={props.route.params.name} />
      <ViewCart />
      <StatusBar style="light" />
    </View>
  );
};

export default RestaurantDetails;
