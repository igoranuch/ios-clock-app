import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    // alignItems: 'center',
  },
  modalView: {
    backgroundColor: "black",
    backgroundColor: "rgb(20, 20, 20)",
    height: "90%",
    padding: "12px",
    borderRadius: 8,
    alignItems: "center",
  },
  modalHeader: {
    display: "flex",
    flexDirection: "row",
    fontSize: 20,
    position: "relative",
  },
  cancelText: {
    position: "absolute",
    right: 12,
    top: 15,
    color: "orange",
  },
  cityName: {
    display: "flex",
    width: "100%",
    height: 36,
    border: "0px solid rgb(35, 35, 35)",
    justifyContent: "center",
    borderBottomWidth: 1.5,
    boxSizing: "border-box",
  },
  cityNameText: {
    fontSize: 14,
    color: "white",
  },
  modalText: {
    color: "white",
    paddingBottom: 15,
  },
});

export default styles;
