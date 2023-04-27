import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import RoundButton from "./RoundButton";
import LapsTable from "./LapsTable";
import moment from "moment";
import styles from "./styles";

const Stopwatch = () => {
  const [stopTime, setstopTime] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let intervalId;

    if (isStarted) {
      intervalId = setInterval(() => {
        setstopTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => clearInterval(intervalId);
  }, [isStarted]);

  const handleStartStop = () => {
    if (isStarted) {
      setIsStarted(false);
      const elapsed = stopTime - startTime;
      setLaps((prevState) => [...prevState, elapsed]);
    } else {
      setStartTime(stopTime);
      setIsStarted(true);
    }
  };

  const handleReset = () => {
    setstopTime(0);
    setIsStarted(false);
    setStartTime(0);
    setLaps([]);
  };

  const duration = moment.duration(stopTime);

  //func zrobiti dlya timera)
  const pad = (number) => {
    return number < 10 ? "0" + number : number;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>
        {pad(duration.minutes())}:{pad(duration.seconds())}.
        {pad(duration.milliseconds() / 10)}
      </Text>
      <View style={styles.buttonsRow}>
        <RoundButton
          title="Reset"
          color="#ffffff"
          background="#3d3d3d"
          onPress={handleReset}
        />
        <RoundButton
          title={isStarted ? "Stop" : "Start"}
          color="#50d167"
          background="#1b361f"
          onPress={handleStartStop}
        />
      </View>
      <LapsTable laps={laps} />
    </View>
  );
};

export default Stopwatch;
