import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Header from "../../components/Header/Header";
import WorldClockItem from "../../components/WorldClockItem/WorldClockItem";
import { cities } from "../../data/cities";

export default function WorldClock() {
  return (
    <View style={styles.main}>
      <Header title={"World Clock"}></Header>
      <View style={styles.timeSection}>
        {cities &&
          cities.map((item) => <WorldClockItem item={item}></WorldClockItem>)}
      </View>
    </View>
  );
}
