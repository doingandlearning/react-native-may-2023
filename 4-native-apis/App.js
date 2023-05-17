import { StyleSheet } from "react-native";
import { SafeAreaView, Button } from "react-native";
import WebView from "react-native-webview";
import React from "react";

export default function App() {
  const [show, setShow] = React.useState(true);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {show && (
        <WebView
          style={styles.container}
          source={{ uri: "https://howdens.com" }}
        />
      )}
      <Button title="Click me" onPress={() => setShow(false)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
