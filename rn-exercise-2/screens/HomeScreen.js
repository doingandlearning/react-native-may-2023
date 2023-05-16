import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "white",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

const HomeScreen = ({ navigation }) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=48f2d5e18b0d2bc50519b58cce6409f1&units=metric`
      );
      const data = await response.json();

      // Save the weather data to AsyncStorage
      const history =
        JSON.parse(await AsyncStorage.getItem("weatherHistory")) || [];
      history.push(data);
      await AsyncStorage.setItem("weatherHistory", JSON.stringify(history));

      // Navigate to WeatherScreen
      navigation.navigate("Weather", { data: data });
    } catch (error) {
      // Handle the error
      console.log(error);
    }
  };

  const dimensions = Dimensions.get("window");
  const imageWidth = dimensions.width;

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/cat.jpg")}
        style={{
          width: imageWidth,
          height: 155,
          marginBottom: 100,
          transform: [{ rotate: "315deg" }],
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        placeholder="Country"
        value={country}
        onChangeText={setCountry}
      />
      <Button title="Fetch Weather" onPress={fetchWeatherData} />
      <Button
        title="View History"
        onPress={() => navigation.navigate("History")}
      />
    </View>
  );
};

export default HomeScreen;
