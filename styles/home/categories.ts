import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  categoriesContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  categoryItem: {
    alignItems: "center",
    marginRight: 30,
  },
  categoryImage: {
    width: 50,
    height: 40,
    resizeMode: "contain",
  },
  categoryText: {
    fontSize: 13,
    fontWeight: "900",
  },
});
