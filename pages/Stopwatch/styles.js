import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    backgroundColor: "black",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    paddingTop: 150,
    paddingHorizontal: 20,
  },
  timer: {
    color: "#FFFF",
    fontSize: 76,
    fontWeight: "200",
  },
  buttonsRow: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginTop: 80,
    marginBottom: 30,
    borderBottomWidth: 1,
    paddingBottom: 15,
    borderColor: "#151515",
  },
});

export default styles;
