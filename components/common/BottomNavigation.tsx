import { View, Text, Pressable } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { styles } from "../../styles/common/bottomNavigation";

const BottomNavigation = () => {
  return (
    <View style={styles.container}>
      <Icon name="home" text="Home" />
      <Icon name="search" text="Browse" />
      <Icon name="shopping-bag" text="Grocery" />
      <Icon name="receipt" text="Orders" />
      <Icon name="user" text="Account" />
    </View>
  );
};

function Icon(props: { name: string; text: string; onPress?: () => void }) {
  return (
    <Pressable>
      <FontAwesome5
        name={props.name}
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text>{props.text}</Text>
    </Pressable>
  );
}

export default BottomNavigation;
