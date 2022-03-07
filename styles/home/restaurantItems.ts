import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 15,
    backgroundColor: "#fff",
  },
  posterImage: {
    width: "100%",
    height: 180,
  },
  likeButton: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  info: {
    paddingTop: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  descriptionText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  rating: {
    backgroundColor: "#eee",
    width: 30,
    height: 30,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 13,
    fontWeight: "900",
  },
  chip: {
    backgroundColor: "#eee",
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
