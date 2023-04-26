import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Header from "../../components/Header/Header";

export default function Alarm() {
  return (
    <View style={styles.main}>
      <Header title={"Alarm"}></Header>
    </View>
  );
}
