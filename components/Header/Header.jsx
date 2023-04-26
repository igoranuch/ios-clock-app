import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <View style={styles.editContainer}>
        <Text style={styles.text}>Edit</Text>
        <Icon name="ios-add" color={"orange"} size={28} />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}
