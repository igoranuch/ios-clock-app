import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import WorldClockItem from "./WorldClockItem";
import { cities } from "../../data/cities";

export default function WorldClock() {
  return (
    <View style={styles.main}>
      <Header title={"World Clock"}></Header>
      <View style={styles.timeSection}>
        {cities &&
          cities.map((item, index) => (
            <WorldClockItem key={index} item={item} />
          ))}
      </View>
    </View>
  );
}
