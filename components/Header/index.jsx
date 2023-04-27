import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

export default function Header({
  children,
  title,
  handleEdit,
  isEditable,
  handleAddOpen,
}) {
  return (
    <View style={styles.header}>
      <View style={styles.editContainer}>
        <TouchableWithoutFeedback onPress={handleEdit}>
          <Text style={styles.text}>{isEditable ? "Done" : "Edit"}</Text>
        </TouchableWithoutFeedback>
        <Icon
          name="ios-add"
          color={"orange"}
          size={28}
          onClick={() => handleAddOpen && handleAddOpen()}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      {children}
    </View>
  );
}
