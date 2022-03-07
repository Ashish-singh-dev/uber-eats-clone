import { Fragment } from "react";
import { Text, Pressable, View } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "../../styles/restaurantDetails/viewCart";
import { MenuItemProps } from "./MenuItems";

function ViewCart() {
  const items: MenuItemProps[] = useSelector(
    // @ts-ignore
    (state) => state.cartReducer.items
  );
  const totalPrice = items
    .map((item) => item.price)
    .reduce((prev, current) => prev + current, 0);

  return (
    <Fragment>
      {totalPrice ? (
        <Pressable style={styles.button}>
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

export default ViewCart;
