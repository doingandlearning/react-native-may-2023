import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import React from "react";
import Review from "./components/Review";
import Button from "./components/Button";
import ListComponent from "./components/ListComponent";
export default function App() {
  return (
    <View style={{ flex: 1, marginTop: 40 }}>
      {/* <Review /> */}
      <Button />
      <ListComponent />
    </View>
  );
}

// CSS
//
