import { useNavigation } from "@react-navigation/native";
import { Fragment, useState } from "react";
import {
  Text,
  Pressable,
  View,
  Modal,
  ListRenderItemInfo,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";
import { styles } from "../../styles/restaurantDetails/viewCart";
import ItemSeperator from "../common/ItemSeperator";
import { MenuItem, MenuItemProps } from "./MenuItems";
import LottieView from "lottie-react-native";

export interface CartData {
  items: MenuItemProps[];
  restaurantName: string;
}

function ViewCart() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { items, restaurantName }: CartData = useSelector(
    // @ts-ignore
    (state) => state.cartReducer
  );

  const totalPrice = items
    .map((item) => item.price)
    .reduce((prev, current) => prev + current, 0);

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleCheckout = () => {
    setModalVisible(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // @ts-ignore
      navigation.navigate("OrderCompleted");
    }, 2500);
  };

  // render selected menu items
  const rednderItem = ({ item }: ListRenderItemInfo<MenuItemProps>) => (
    <MenuItem
      name={item.name}
      description={item.description}
      image_url={item.image_url}
      price={item.price}
      showCheckBox={false}
    />
  );

  return (
    <Fragment>
      {/* checkout selected items */}
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.selectedItemView}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            <FlatList
              data={items}
              renderItem={rednderItem}
              keyExtractor={(item) => item.name}
              ItemSeparatorComponent={ItemSeperator}
              ListFooterComponent={() => (
                <Footer hadleCheckout={handleCheckout} total={totalPrice} />
              )}
            />
          </View>
        </View>
      </Modal>
      {/* loader */}
      {loading && (
        <View style={styles.loadingAnimationContainer}>
          <LottieView
            source={require("../../assets/animations/scanner.json")}
            style={{ height: 200, marginBottom: 20, alignSelf: "center" }}
            autoPlay
            loop
            speed={2}
          />
        </View>
      )}
      {/* view cart button */}
      {/* show when atleast one item is selected */}
      {totalPrice ? (
        <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
          <View style={styles.container}>
            <Text style={styles.buttonText}>View Cart</Text>
            <Text style={styles.buttonText}>₹ {totalPrice}</Text>
          </View>
        </Pressable>
      ) : (
        <Fragment />
      )}
    </Fragment>
  );
}

function Footer(props: { total: number; hadleCheckout: () => void }) {
  return (
    <Fragment>
      <ItemSeperator />
      <View style={styles.totalPrice}>
        <Text style={styles.totalText}>Subtotal</Text>
        <Text style={styles.totalText}>₹ {props.total}</Text>
      </View>
      <Pressable style={styles.checkoutButton} onPress={props.hadleCheckout}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </Pressable>
    </Fragment>
  );
}

export default ViewCart;
