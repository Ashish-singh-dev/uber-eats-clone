import { View } from "react-native";

const ItemSeperator = (props: {
  maringTop?: number;
  marginBottom?: number;
}) => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: "#eee",
        marginTop: props.maringTop,
        marginBottom: props.marginBottom,
      }}
    />
  );
};

export default ItemSeperator;
