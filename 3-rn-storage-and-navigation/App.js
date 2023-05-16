import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SecureStorage from "./components/SecureStorage";
import TodoApp from "./components/TodoApp";
export default function App() {
  return (
    <View style={styles.container}>
      <TodoApp />
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
