import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    fontSize: 18,
    marginBottom: 10,
  },
});

const HistoryScreen = ({ navigation }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const history =
        JSON.parse(await AsyncStorage.getItem("weatherHistory")) || [];
      setHistory(history.filter((item) => item.message !== "city not found"));
    };

    fetchHistory();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={history}
        keyExtractor={(item) => item?.id?.toString()}
        renderItem={({ item }) => (
          <Text
            style={styles.item}
            onPress={() =>
              navigation.navigate("Home", {
                city: item.name,
                country: item.sys.country,
              })
            }
          >
            {item.name}, {item.sys.country}: {item.weather[0].description},{" "}
            {item.main.temp}
          </Text>
        )}
      ></FlatList>
    </View>
  );
};

export default HistoryScreen;
