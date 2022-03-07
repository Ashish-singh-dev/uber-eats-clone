import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  name: {
    maxWidth: 200,
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginBottom: 8,
  },
  des: {
    fontWeight: "600",
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
  },
});
