import React, { useState } from "react";
import { View } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import WorldClockItem from "./WorldClockItem";
import { cities } from "../../data/cities";
import WorldClockModal from "./WorldClockModal";

export default function WorldClock() {
  const [selectedCities, setSelectedCities] = useState([cities[0]]);
  const [worldClockModalOpen, setWorldClockModalOpen] = useState(false);
  const [isEditable, setEditable] = useState(false);

  const handleAdd = (selectedCity) => {
    !selectedCities.includes(selectedCity) &&
      setSelectedCities([...selectedCities, selectedCity]);
  };

  const handleRemove = (selectedCity) => {
    setSelectedCities(
      selectedCities.filter(({ city }) => selectedCity.city !== city)
    );
  };

  return (
    <View style={styles.main}>
      <Header
        title={"World Clock"}
        isEditable={isEditable}
        handleAddOpen={() => setWorldClockModalOpen(!worldClockModalOpen)}
        handleEdit={() => setEditable(!isEditable)}
      ></Header>
      <View style={styles.timeSection}>
        {selectedCities &&
          selectedCities.map((item, index) => (
            <WorldClockItem
              key={index}
              item={item}
              isEditable={isEditable}
              handleRemove={handleRemove}
            />
          ))}
      </View>
      <WorldClockModal
        visible={worldClockModalOpen}
        onRequestClose={() => setWorldClockModalOpen(false)}
        handleAdd={handleAdd}
      />
    </View>
  );
}
