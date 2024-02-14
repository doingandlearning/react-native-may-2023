import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  Platform,
} from "react-native";
import Constants from "expo-constants";
import React from "react";
import * as SQLite from "expo-sqlite";
import Items from "./Items";

// Opening db connection

// Getting our todos from the db

// Adding a todo to our db

function openDatabase() {
  const db = SQLite.openDatabase("TodoApp", "0.0.1");
  return db;
}

const db = openDatabase();

export default function TodoApp({ navigation }) {
  const [text, setText] = React.useState("");
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists items (id integer primary key not null, done int, value text);"
      );
      tx.executeSql("select * from items", [], (_, { rows: { _array } }) => {
        setItems(_array);
      });
    });
  }, []);

  const add = (text) => {
    if (!text) return;

    db.transaction(
      (tx) => {
        tx.executeSql("insert into items (done, value) values (0, ?)", [text]);
      },
      null,
      () => {
        db.transaction((tx) => {
          tx.executeSql(
            "select * from items",
            [],
            (_, { rows: { _array } }) => {
              setItems(_array);
            }
          );
        });
      }
    );
  };

  const setTodoData = (id, done) => {
    db.transaction(
      (tx) => {
        if (done) {
          tx.executeSql(`delete from items where id = ?;`, [id]);
        } else {
          tx.executeSql(`update items set done = 1 where id = ?;`, [id]);
        }
      },
      null,
      () => {
        db.transaction((tx) => {
          tx.executeSql(
            "select * from items",
            [],
            (_, { rows: { _array } }) => {
              setItems(_array);
            }
          );
        });
      }
    );
  };

  const undoneItems = items.filter((item) => !item.done);
  const doneItems = items.filter((item) => item.done);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>SQLite Example</Text>
      <Button title="About" onPress={() => navigation.navigate("About")} />
      {Platform.OS === "web" ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.heading}>
            Expo SQlite is not supported on web!
          </Text>
        </View>
      ) : (
        <>
          <View style={styles.flexRow}>
            <TextInput
              onChangeText={(text) => setText(text)}
              onSubmitEditing={() => {
                add(text);
                setText(null);
              }}
              placeholder="what do you need to do?"
              style={styles.input}
              value={text}
            />
          </View>
          <ScrollView style={styles.listArea}>
            <Items done={false} items={undoneItems} setTodoData={setTodoData} />
            <Items done={true} items={doneItems} setTodoData={setTodoData} />
          </ScrollView>
        </>
      )}
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
