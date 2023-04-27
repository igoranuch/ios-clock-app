import { ScrollView } from "react-native";
import LapItem from "./LapItem";
import styles from "./styles";

const LapsTable = ({ laps }) => {
  return (
    <ScrollView style={styles.scrollView}>
      {laps &&
        laps.map((lap, index) => (
          <LapItem number={index + 1} key={index} interval={lap}></LapItem>
        ))}
    </ScrollView>
  );
};

export default LapsTable;
