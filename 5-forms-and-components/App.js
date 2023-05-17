import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Switch from "./components/Switch";
import Picker from "./components/Picker";
import Slider from "./components/Slider";
import BottomSheet from "./components/SlidingUp";

export default function App() {
  const [fun, setFun] = React.useState(false);
  const [currentActivity, setCurrentActivity] = React.useState("");
  const [funAmount, setFunAmount] = React.useState(0);

  const activities = [
    "Rock climbing",
    "Kayaking",
    "Coding",
    "Running",
    "Building electronics",
    "Gaming",
    "Surfing",
  ];

  return (
    <>
      <View style={styles.container}>
        <Text>
          You are {fun ? "having fun" : "not having fun"} doing{" "}
          {currentActivity} (rated {Math.floor(funAmount)})
        </Text>
        <Switch label="Having fun" value={fun} setValue={setFun} />
        <Picker
          options={activities}
          value={currentActivity}
          setValue={setCurrentActivity}
        />
        <Text>How much fun are you having?</Text>
        <Slider min={-5} max={5} value={funAmount} setValue={setFunAmount} />
        <StatusBar style="auto" />
      </View>
      <BottomSheet
        details={[
          { icon: "😃", title: "Free BBQ", description: "Gas or coal" },
        ]}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
