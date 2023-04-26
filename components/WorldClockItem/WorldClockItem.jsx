import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function WorldClockItem({ item }) {
  const { city } = item;

  return (
    <View style={styles.main}>
      <View style={styles.infoBlock}>
        <Text style={styles.diffText}>Today +1HR</Text>
        <Text style={styles.infoBlockText}>{city}</Text>
      </View>
      <View>
        <Text style={styles.timeText}>12:03</Text>
      </View>
    </View>
  );
}
