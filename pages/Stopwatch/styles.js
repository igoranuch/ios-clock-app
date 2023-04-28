import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "black",
    paddingTop: 150,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  timer: {
    color: "#FFFF",
    fontSize: 80,
    fontWeight: "normal",
  },
  buttonsRow: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingTop: 100,
    paddingBottom: 15,
    borderColor: "#151515",
  },
});

export default styles;
