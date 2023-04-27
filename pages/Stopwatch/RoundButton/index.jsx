import { Text, View } from "react-native";
import styles from "./styles";

const RoundButton = ({ title, color, background, onPress }) => {
  return (
    <View style={[styles.button, { backgroundColor: background }]}>
      <View style={styles.buttonBorder}>
        <Text style={[styles.buttonTitle, { color }]} onPress={onPress}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default RoundButton;
