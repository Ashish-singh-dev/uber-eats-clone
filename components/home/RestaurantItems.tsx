import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import MaterilaCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "../../styles/home/restaurantItems";
import ItemSeperator from "../common/ItemSeperator";
import Categories from "./Categories";
import Skeleton from "./Skeleton";

interface RestaurantInfo {
  name: string;
  rating: number;
  price: string;
  category: {
    alias: string;
    title: string;
  }[];
}

interface ListRenderItemInfoProps {
  id: string;
  name: string;
  image_url: any;
  categories: { alias: string; title: string }[];
  price: string;
  review_count: number;
  rating: number;
}

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const RestaurantItems = ({ navigation }: IProps) => {
  const [restaurantData, setRestaurantData] = useState<any[]>([]);

  useEffect(() => {
    // get restaurants data
    const getRestaurantData = async () => {
      const url = `${process.env.API_URL}/businesses/search?term=restaurant&location=sanDiego`;
      try {
        const data = await fetch(url, {
          headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`,
          },
        }).then((res) => res.json());
        if (data) {
          setRestaurantData(data.businesses);
        }
      } catch (error) {
        // console.log(error);
      }
    };
    getRestaurantData();
  }, []);

  //  render item component from flatList
  const renderItem = ({
    item,
  }: ListRenderItemInfo<ListRenderItemInfoProps>) => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate("RestaurantDetail", {
            name: item.name,
            image_url: item.image_url,
            categories: item.categories,
            reviews: item.review_count,
            rating: item.rating,
            price: item.price,
          });
        }}
      >
        <View style={styles.container}>
          <RestaurantImage image_url={item.image_url} />
          <RestaurantInfo
            name={item.name}
            category={item.categories}
            price={item.price}
            rating={item.rating}
          />
        </View>
      </Pressable>
    );
  };

  // restaurants items
  return (
    <View style={{ flex: 1 }}>
      {!restaurantData.length ? (
        <Skeleton isLoading={true} />
      ) : (
        <FlatList
          data={restaurantData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={ItemSeperator}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={Categories}
        />
      )}
    </View>
  );
};

function RestaurantImage({ image_url }: any) {
  return (
    <View>
      <Image source={{ uri: image_url }} style={styles.posterImage} />
      {/* like button */}
      <Pressable style={styles.likeButton}>
        <MaterilaCommunityIcon
          name="heart-outline"
          size={24}
          style={{ color: "#fff" }}
        />
      </Pressable>
    </View>
  );
}

function RestaurantInfo({ name, category, price, rating }: RestaurantInfo) {
  return (
    <View style={styles.info}>
      <View>
        <Text style={styles.descriptionText}>{name}</Text>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          {category.slice(0, 2).map(({ title }, index) => {
            return <Chip text={title} key={index} />;
          })}
        </View>
      </View>
      <View>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
        <Text style={{ marginTop: 10 }}>{price}</Text>
      </View>
    </View>
  );
}

function Chip(props: { text: string }) {
  return (
    <View style={styles.chip}>
      <Text style={{ fontSize: 13, fontWeight: "600" }}>{props.text}</Text>
    </View>
  );
}

export default RestaurantItems;
