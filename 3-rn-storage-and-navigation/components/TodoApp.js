import { StyleSheet, View, Text, TextInput } from "react-native";
import Constants from "expo-constants";
import React from "react";
import * as SQLite from "expo-sqlite";

// Opening db connection

// Getting our todos from the db

// Adding a todo to our db

function openDatabase() {
  const db = SQLite.openDatabase("TodoApp", "0.0.1");
  return db;
}

const db = openDatabase();

export default function TodoApp() {
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    // Check if the table exists:
    // - if yes, get the todos
    // - if no, create the table (and then get the todos)
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE table if not exists items (id integer primary key not null, done int, value text);"
      );
    });
  }, []);

  const add = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Howden's Todo</Text>
      <View style={styles.flexRow}>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          onSubmitEditing={() => {
            add(text);
            setText("");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  flexRow: {
    flexDirection: "row",
  },
  input: {
    borderColor: "#4630eb",
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    height: 48,
    margin: 16,
    padding: 8,
    width: 250,
  },
  listArea: {
    backgroundColor: "#f0f0f0",
    flex: 1,
    paddingTop: 16,
  },
  sectionContainer: {
    marginBottom: 16,
    marginHorizontal: 16,
  },
  sectionHeading: {
    fontSize: 18,
    marginBottom: 8,
  },
});
