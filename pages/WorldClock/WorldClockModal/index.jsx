import React, { useState } from "react";
import styles from "./styles";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { cities } from "../../../data/cities";
import { Picker } from "react-native-web";

const WorldClockModal = ({ visible, onRequestClose, handleAdd }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onRequestClose}
      transparent={true}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.cancelText} size={28} onClick={onRequestClose}>
            Cancel
          </Text>
          <View style={styles.modalHeader}>
            <Text style={{ ...styles.modalText, fontSize: 16 }}>
              Choose a City
            </Text>
          </View>
          {cities.map((city) => (
            <TouchableOpacity
              style={styles.cityName}
              onPress={() => {
                handleAdd(city);
                onRequestClose();
              }}
              key={city.city}
            >
              <View>
                <Text style={styles.cityNameText}>{city.city}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default WorldClockModal;
