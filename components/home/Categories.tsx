import { View, Text, Image, FlatList, ListRenderItemInfo } from "react-native";
import { styles } from "../../styles/home/categories";

const categories = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "Fast Food",
  },
  {
    image: require("../../assets/images/desserts.png"),
    text: "Desserts",
  },
  {
    image: require("../../assets/images/coffee.png"),
    text: "Coffee",
  },
];

const Categories = () => {
  const renderItem = ({
    item,
  }: ListRenderItemInfo<{
    image: any;
    text: string;
  }>) => (
    <View style={styles.categoryItem}>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.categoriesContainer}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={({ text }) => text}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Categories;
