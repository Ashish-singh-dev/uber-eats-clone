import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "../../styles/restaurantDetails/about";
import { RouteProp } from "@react-navigation/native";

interface IProps {
  route: RouteProp<
    {
      params: {
        name: string;
        image_url: string;
        categories: {
          alias: string;
          title: string;
        }[];
        reviews: number;
        rating: number;
        price: string;
      };
    },
    "params"
  >;
}

const About = ({ route }: IProps) => {
  const { name, image_url, price, reviews, rating, categories } = route.params;

  const formattedCategories = categories
    .map((category) => category.title)
    .join(" • ");
  const description = `${formattedCategories} • ${price} • 🎫 • ${rating} ⭐ (${reviews})`;

  return (
    <View>
      <RestaurantImage image_url={image_url} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

function RestaurantImage(props: { image_url: string }) {
  return <Image source={{ uri: props.image_url }} style={styles.image} />;
}

function RestaurantName(props: { name: string }) {
  return <Text style={styles.title}>{props.name}</Text>;
}

function RestaurantDescription(props: { description: string }) {
  return <Text style={styles.description}>{props.description}</Text>;
}

export default About;
