import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  changeBlock: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: "1px",
    borderBottomColor: "rgba(211, 211, 211, 0.15)",
    width: "100%",
    paddingBottom: 10,
    paddingRight: 15,
  },
  infoBlock: {
    display: "flex",
    justifyContent: "center",
  },
  timeText: {
    fontSize: "45pt",
    fontWeight: "100",
  },
  infoText: {
    fontSize: 16,
  },

  enabledAlarm: {
    color: "white",
  },

  disabledAlarm: { color: "rgba(255, 255, 255, 0.5)" },
});

export default styles;
