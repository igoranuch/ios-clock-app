import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WorldClock from "./pages/WorldClock";
import Alarm from "./pages/Alarm";
import Stopwatch from "./pages/Stopwatch";
import Timer from "./pages/Timer";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, _, size }) => {
            let iconName;

            switch (route.name) {
              case "WorldClock":
                iconName = "globe-outline";
                break;
              case "Alarm":
                iconName = "ios-alarm";
                break;
              case "Stopwatch":
                iconName = "ios-stopwatch";
                break;
              case "Timer":
                iconName = "ios-timer";
                break;
            }

            return (
              <Icon
                name={iconName}
                color={focused ? "orange" : "lightgray"}
                size={size}
              />
            );
          },
          tabBarActiveTintColor: "orange",
          tabBarInactiveTintColor: "lightgray",
          tabBarLabelStyle: { fontSize: 14 },
          headerShown: false,
          tabBarStyle: styles.tabBarStyle,
        })}
      >
        <Tab.Screen name="WorldClock" component={WorldClock} />
        <Tab.Screen name="Alarm" component={Alarm} />
        <Tab.Screen name="Stopwatch" component={Stopwatch} />
        <Tab.Screen name="Timer" component={Timer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
