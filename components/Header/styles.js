import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    borderBottomWidth: "1px",
    borderBottomColor: "rgba(211, 211, 211, 0.15)",
    display: "flex",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingRight: 10,
    gap: 15,
  },
  text: {
    color: "orange",
    fontSize: 18,
  },
  editContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 40,
    fontWeight: "700",
    color: "white",
  },
});

export default styles;
