import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";
import RoundButton from "../Stopwatch/RoundButton";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const hourInputRef = useRef(null);
  const minuteInputRef = useRef(null);
  const secondInputRef = useRef(null);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        if (seconds === 0 && minutes === 0 && hours === 0) {
          setIsActive(false);
          return;
        }

        if (seconds === 0 && minutes > 0) {
          setSeconds(59);
          setMinutes((minutes) => minutes - 1);
        } else if (seconds === 0 && minutes === 0 && hours > 0) {
          setSeconds(59);
          setMinutes(59);
          setHours((hours) => hours - 1);
        } else {
          setSeconds((seconds) => seconds - 1);
        }
      }, 1000);

      hourInputRef.current.clear();
      minuteInputRef.current.clear();
      secondInputRef.current.clear();
    }

    return () => clearInterval(intervalId);
  }, [isActive, seconds, minutes, hours]);

  const handleStart = () => {
    if (!seconds && !minutes && !hours) {
      return;
    }

    const secondsToAdd = parseInt(seconds) || 0;
    const minutesToAdd = parseInt(minutes) || 0;
    const hoursToAdd = parseInt(hours) || 0;

    let newSeconds = secondsToAdd % 60;
    let newMinutes = (minutesToAdd + Math.floor(secondsToAdd / 60)) % 60;
    let newHours =
      hoursToAdd +
      Math.floor((minutesToAdd + Math.floor(secondsToAdd / 60)) / 60);

    if (newHours > 23) {
      newHours = 23;
      newMinutes = 59;
      newSeconds = 59;
    } else if (newMinutes > 59) {
      newMinutes = 59;
      newSeconds = 59;
    } else if (newSeconds > 59) {
      newSeconds = 59;
    }

    setSeconds(newSeconds);
    setMinutes(newMinutes);
    setHours(newHours);

    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setIsActive(false);
    hourInputRef.current.clear();
    minuteInputRef.current.clear();
    secondInputRef.current.clear();
  };

  return (
    <View style={styles.container}>
      <View style={styles.timer}>
        <Text style={styles.timeText}>
          {hours.toString().padStart(2, "0")}:
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Hours"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          keyboardType="numeric"
          onChangeText={setHours}
          ref={hourInputRef}
        />
        <TextInput
          style={styles.input}
          placeholder="Minutes"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          keyboardType="numeric"
          onChangeText={setMinutes}
          ref={minuteInputRef}
        />
        <TextInput
          style={styles.input}
          placeholder="Seconds"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          keyboardType="numeric"
          onChangeText={setSeconds}
          ref={secondInputRef}
        />
      </View>
      <View style={styles.buttonsRow}>
        <TouchableOpacity onPress={handleReset}>
          <RoundButton
            style={styles.button}
            title="Cancel"
            color="#ffffff"
            background="#3d3d3d"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={isActive ? handlePause : handleStart}>
          <RoundButton
            style={styles.button}
            title={isActive ? "Pause" : "Start"}
            color={isActive ? "#ffffff" : "#50d167"}
            background={isActive ? "red" : "#1b361f"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Timer;
