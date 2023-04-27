import React, { useState } from "react";
import styles from "./styles";
import { Text, View, Switch } from "react-native";

export default function AlarmItem({ value, isEnabled }) {
  const [isAlarmEnabled, setAlarmEnabled] = useState(isEnabled);

  const toggleSwitch = () => setAlarmEnabled((previousState) => !previousState);

  return (
    <View style={styles.changeBlock}>
      <View style={styles.infoBlock}>
        <Text
          style={{
            ...styles.timeText,
            ...(isAlarmEnabled ? styles.enabledAlarm : styles.disabledAlarm),
          }}
        >
          {value}
        </Text>
        <Text
          style={{
            ...styles.infoText,
            ...(isAlarmEnabled ? styles.enabledAlarm : styles.disabledAlarm),
          }}
        >
          Alarm
        </Text>
      </View>
      <Switch value={isAlarmEnabled} onValueChange={toggleSwitch} />
    </View>
  );
}
