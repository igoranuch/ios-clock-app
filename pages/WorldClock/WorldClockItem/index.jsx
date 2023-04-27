import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

export default function WorldClockItem({ item, isEditable, handleRemove }) {
  const { city } = item;

  return (
    <View style={styles.main}>
      <View style={styles.wrap}>
        {isEditable && (
          <TouchableWithoutFeedback onPress={() => handleRemove(item)}>
            <View style={styles.iconWrap}>
              <Icon name="ios-remove-circle" color="red" size={24} />
            </View>
          </TouchableWithoutFeedback>
        )}
        <View style={styles.infoBlock}>
          <Text style={styles.diffText}>Today +0HR</Text>
          <Text style={styles.infoBlockText}>{city}</Text>
        </View>
      </View>
      <View>{!isEditable && <Text style={styles.timeText}>21:30</Text>}</View>
    </View>
  );
}
