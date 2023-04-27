import { Text, View } from "react-native";
import moment from "moment";
import styles from "./styles";

const LapItem = ({ number, interval }) => {
  const duration = moment.duration(interval);

  return (
    <View style={styles.lap}>
      <Text style={styles.lapText}>{number}</Text>
      <Text style={styles.lapText}>
        {duration.minutes()}:{duration.seconds()}.
        {Math.floor(duration.milliseconds() / 10)}
      </Text>
    </View>
  );
};

export default LapItem;
