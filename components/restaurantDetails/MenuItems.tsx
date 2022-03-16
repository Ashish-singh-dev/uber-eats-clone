import { View, Text, Image, FlatList, ListRenderItemInfo } from "react-native";
import { styles } from "../../styles/restaurantDetails/menuItem";
import { menuItems } from "../../utils/menuItems";
import ItemSeperator from "../common/ItemSeperator";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";

export interface MenuItemProps {
  name: string;
  description: string;
  image_url: string;
  price: number;
  showCheckBox?: boolean;
  isItemSelected?: (name: string) => boolean;
  selectItem?: (
    item: {
      name: string;
      description: string;
      image_url: string;
      price: number;
    },
    isChecked: boolean
  ) => void;
}

interface IProps {
  restaurantName: string;
}

const MenuItems = ({ restaurantName }: IProps) => {
  const dispatch = useDispatch();
  const items: MenuItemProps[] = useSelector(
    // @ts-ignore
    (state) => state.cartReducer.items
  );

  const isItemSelected = (name: string) =>
    Boolean(items.find((item) => item.name === name));

  const selectItem = (
    item: {
      name: string;
      description: string;
      image_url: string;
      price: number;
    },
    isChecked: boolean
  ) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        item,
        restaurantName,
        isChecked,
      },
    });
  };

  useEffect(() => {
    dispatch({
      type: "UPDATE_RESTAURANT_NAME",
      payload: {
        restaurantName,
      },
    });
  }, [restaurantName]);

  // menu items
  const renderItem = ({
    item: { name, image_url, description, price },
  }: ListRenderItemInfo<MenuItemProps>) => (
    <MenuItem
      name={name}
      description={description}
      image_url={image_url}
      price={price}
      selectItem={selectItem}
      isItemSelected={isItemSelected}
      showCheckBox
    />
  );

  return (
    <FlatList
      data={menuItems}
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
      renderItem={renderItem}
      keyExtractor={({ name }) => name}
      ItemSeparatorComponent={ItemSeperator}
    />
  );
};

export function MenuItem({
  name,
  description,
  image_url,
  price,
  showCheckBox,
  selectItem,
  isItemSelected,
}: MenuItemProps) {
  return (
    <View style={styles.menuItem}>
      {showCheckBox ? (
        <BouncyCheckbox
          fillColor="green"
          iconStyle={{ borderRadius: 3 }}
          isChecked={isItemSelected && isItemSelected(name)}
          onPress={(isChecked) => {
            selectItem &&
              selectItem(
                {
                  name,
                  description,
                  image_url,
                  price,
                },
                isChecked
              );
          }}
        />
      ) : (
        <Fragment />
      )}
      <View style={{ flex: 1, marginRight: 5 }}>
        <Text style={styles.name}>{name}</Text>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.des}>
          {description}
        </Text>
        <Text style={styles.price}>₹{price}</Text>
      </View>
      <Image source={{ uri: image_url }} style={{ width: 150, height: 100 }} />
    </View>
  );
}

export default MenuItems;
