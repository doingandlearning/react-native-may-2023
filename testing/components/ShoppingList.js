import { FlatList, Text, TextInput, Button, StyleSheet } from "react-native";
import React from "react";

export default function ShoppingList() {
  const [shoppingItem, setShoppingItem] = React.useState("");
  const [items, setItems] = React.useState([]);

  const addNewItemToShoppingList = () => {
    setItems([shoppingItem, ...items]);
    setShoppingItem("");
  };

  return (
    <>
      <TextInput
        value={shoppingItem}
        placeholder="Enter shopping item"
        onChangeText={(text) => setShoppingItem(text)}
        style={styles.input}
      />
      <Button title="Add the item to list" onPress={addNewItemToShoppingList} />
      <FlatList
        data={items}
        renderItem={({ item }) => <Text>{item}</Text>}
      ></FlatList>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    passing: 10,
    width: 150,
  },
});
