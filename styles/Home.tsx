import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  inputWrapper: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    width: 270,
    borderWidth: 1,
    borderRadius: 60,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderColor: "#C0C0C0",
  },
  buttonWrapper: {
    width: 50,
    height: 50,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#C0C0C0",
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  addButton: {
    fontSize: 20,
  },
});
