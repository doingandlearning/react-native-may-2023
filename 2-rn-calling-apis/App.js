import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  SafeAreaView,
  Button,
} from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { MovieContext, MovieProvider } from "./context/MovieContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput } from "react-native";

export default function WrappedApp() {
  return (
    <MovieProvider>
      <App />
    </MovieProvider>
  );
}

function App() {
  const { movies, isLoading } = React.useContext(MovieContext);
  const [password, setPassword] = React.useState();

  React.useEffect(() => {
    async function getAndSetPassword() {
      const storedPassword = await AsyncStorage.getItem("rn-password");
      console.log(storedPassword);

      if (storedPassword) {
        const parsedPassword = JSON.parse(storedPassword);
        setPassword(parsedPassword.password);
      }
    }
    getAndSetPassword();
  }, []);

  async function handleStore() {
    try {
      await AsyncStorage.setItem(
        "rn-password",
        JSON.stringify({ password: password, date: new Date() })
      );
    } catch (error) {
      console.log("There was an error");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} onChangeText={setPassword}></TextInput>
      <Text>The password is {password}.</Text>
      <Button title="Save password ... " onPress={handleStore}></Button>
      {isLoading ? (
        <ActivityIndicator />
      ) : movies.length === 0 ? (
        <Text>Sorry. No movies found.</Text>
      ) : (
        <FlatList
          data={movies}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Text style={styles.item}>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        ></FlatList>
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  item: {
    backgroundColor: "aliceblue",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    passing: 10,
    width: 150,
  },
});
