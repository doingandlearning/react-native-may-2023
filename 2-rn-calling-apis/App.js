import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { MovieContext, MovieProvider } from "./context/MovieContext";

export default function WrappedApp() {
  return (
    <MovieProvider>
      <App />
    </MovieProvider>
  );
}

function App() {
  const { movies, isLoading } = React.useContext(MovieContext);

  return (
    <SafeAreaView style={styles.container}>
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
});
