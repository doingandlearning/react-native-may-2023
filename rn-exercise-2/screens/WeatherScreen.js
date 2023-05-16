import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

const WeatherScreen = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Weather: {data.weather[0].description}</Text>
      <Text style={styles.text}>Temperature: {data.main.temp}</Text>
      <Button
        title="View History"
        onPress={() => navigation.navigate("History")}
      />
    </View>
  );
};

export default WeatherScreen;
