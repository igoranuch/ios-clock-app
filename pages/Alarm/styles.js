import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    backgroundColor: "black",
    height: "100%",
    paddingLeft: 15,
  },
  sleewWakeUpContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  sleewWakeUpText: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
  },
  changeBlock: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: "1px",
    borderBottomColor: "rgba(211, 211, 211, 0.15)",
    width: "100%",
    paddingBottom: 10,
    paddingRight: 10,
  },
  infoBlock: {
    display: "flex",
    justifyContent: "center",
  },
  timeText: {
    fontSize: "45pt",
    color: "white",
    fontWeight: "100",
  },
  infoText: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
  },
  buttonBody: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(38,38,40)",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 25,
  },
  buttonText: {
    color: "orange",
    fontSize: 15,
  },
  other: { fontSize: 20, color: "white", fontWeight: "400" },
  otherContainer: {
    display: "flex",
    borderBottomWidth: "1px",
    borderBottomColor: "rgba(211, 211, 211, 0.15)",
    width: "100%",
    paddingBottom: 7,
    paddingTop: 30,
  },
});

export default styles;
