import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: "1px",
    borderBottomColor: "rgba(211, 211, 211, 0.15)",
    width: "100%",
    paddingRight: 15,
    paddingVertical: 10,
  },
  infoBlock: {
    display: "flex",
    gap: 5,
    justifyContent: "space-between",
  },
  infoBlockText: {
    fontSize: 34,
    color: "white",
  },
  timeText: {
    fontSize: 68,
    color: "white",
  },
  diffText: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.4)",
  },
});

export default styles;
