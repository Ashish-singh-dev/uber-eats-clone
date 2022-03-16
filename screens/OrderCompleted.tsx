import { StatusBar } from "expo-status-bar";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/orderCompleted";
import LottieView from "lottie-react-native";
import { useSelector } from "react-redux";
import { CartData } from "../components/restaurantDetails/ViewCart";
import { MenuItem } from "../components/restaurantDetails/MenuItems";

const OrderCompleted = () => {
  const { items, restaurantName }: CartData = useSelector(
    // @ts-ignore
    (state) => state.cartReducer
  );
  return (
    <SafeAreaView style={styles.container}>
      {/* check mark animation */}
      <LottieView
        autoPlay
        loop={false}
        style={styles.lottieViewStyle}
        source={require("../assets/animations/check-mark.json")}
        speed={0.5}
      />
      <Text style={styles.text}>Order Completed from {restaurantName}</Text>
      <ScrollView style={{ marginTop: 20, flex: 1 }}>
        {items.map(({ name, description, image_url, price }, index) => (
          <MenuItem
            key={index}
            name={name}
            description={description}
            image_url={image_url}
            price={price}
          />
        ))}
        <LottieView
          source={require("../assets/animations/cooking.json")}
          style={styles.lottieViewStyle}
          autoPlay
          loop
          speed={2}
        />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default OrderCompleted;
