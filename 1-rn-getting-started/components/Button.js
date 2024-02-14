import {
  View,
  Button,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  Pressable,
} from "react-native";

export default function CustomButton() {
  return (
    <>
      <Button
        title="Click me"
        onPress={() => console.log(`${Platform.OS} - Button was clicked!`)}
        style={styles.button}
      ></Button>
      <TouchableOpacity
        onPress={() =>
          console.log(`${Platform.OS} - TouchableOpacity was clicked!`)
        }
        style={Platform.OS === "ios" ? styles.iosButton : styles.androidButton}
      >
        <Text>Click me instead!</Text>
      </TouchableOpacity>
      <Pressable>
        <Text>Press me instead!</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  iosButton: {
    backgroundColor: "#ccc",
    borderRadius: 20,
    borderWidth: 2,
    padding: 10,
    margin: 2,
  },
  androidButton: {
    backgroundColor: "red",
    borderRadius: 20,
    borderWidth: 2,
    padding: 10,
    margin: 2,
  },
});
