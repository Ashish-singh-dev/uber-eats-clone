import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../styles/home/home";
import HeaderTabs from "../components/home/HeaderTabs";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../components/home/SearchBar";
import RestaurantItems from "../components/home/RestaurantItems";
import ItemSeperator from "../components/common/ItemSeperator";
import BottomNavigation from "../components/common/BottomNavigation";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const Home = ({ navigation }: IProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ItemSeperator />
      <RestaurantItems navigation={navigation} />
      <ItemSeperator />
      <BottomNavigation />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Home;
