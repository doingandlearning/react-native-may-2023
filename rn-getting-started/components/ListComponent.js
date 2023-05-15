import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

const DATA = [
  { id: 1, title: "First Item" },
  { id: 2, title: "Second Item" },
  { id: 3, title: "Third Item" },
];

export default function ListComponent() {
  const [currentId, setCurrentId] = React.useState([]);

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={[
          styles.item,
          currentId.includes(item.id) ? { backgroundColor: "blue" } : {},
        ]}
        onPress={() =>
          currentId.includes(item.id)
            ? null
            : setCurrentId([...currentId, item.id])
        }
      >
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  }

  return <FlatList data={DATA} renderItem={renderItem}></FlatList>;
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "pink",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
