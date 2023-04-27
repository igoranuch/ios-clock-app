import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import Icon from "react-native-vector-icons/Ionicons";
import AlarmItem from "./AlarmItem";
import { alarms } from "../../data/alarms";

export default function Alarm() {
  return (
    <View style={styles.main}>
      <Header title={"Alarm"}>
        <View style={styles.sleewWakeUpContainer}>
          <Icon name={"ios-bed"} color={"white"} size={24} />
          <Text style={styles.sleewWakeUpText}>Sleep|Wake Up</Text>
        </View>
      </Header>
      <View style={styles.changeBlock}>
        <View style={styles.infoBlock}>
          <Text style={styles.timeText}>06:40</Text>
          <Text style={styles.infoText}>Tomorrow Morning</Text>
        </View>
        <TouchableOpacity style={styles.buttonBody}>
          <Text style={styles.buttonText}>CHANGE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.otherContainer}>
        <Text style={styles.other}>Other</Text>
      </View>
      <ScrollView>
        {alarms &&
          alarms.map((item, index) => (
            <AlarmItem
              key={index}
              value={item.value}
              isEnabled={item.isEnabled}
            ></AlarmItem>
          ))}
      </ScrollView>
    </View>
  );
}
