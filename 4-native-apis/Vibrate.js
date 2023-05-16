import { StatusBar } from "expo-status-bar";
import { Button } from "react-native";
import { StyleSheet, Text, View, Vibration } from "react-native";

export default function App() {
  const ONE_SECOND_IN_MS = 1000;
  // wait, vibrate, wait, vibrate
  const PATTERN = [
    0.1 * ONE_SECOND_IN_MS,
    1.4 * ONE_SECOND_IN_MS,
    0.2 * ONE_SECOND_IN_MS,
    5 * ONE_SECOND_IN_MS,
  ];
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Vibrate" onPress={() => Vibration.vibrate()} />
      <Button
        title="Vibrate for 10s"
        onPress={() => Vibration.vibrate(10 * ONE_SECOND_IN_MS)}
      />
      <Button
        title="Vibrate with pattern"
        onPress={() => Vibration.vibrate(PATTERN)}
      />
      <Button title="Stop vibration" onPress={() => Vibration.cancel()} />
      <StatusBar style="auto" />
    </View>
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
