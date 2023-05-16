import * as SecureStore from "expo-secure-store";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import React from "react";

export default function SecureStorage() {
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    async function getAndSetPassword() {
      const storedPassword = await SecureStore.getItemAsync("rn-password");
      if (storedPassword) {
        setPassword(storedPassword);
      }
    }
    getAndSetPassword();
  }, []);

  const handleStore = async () => {
    try {
      await SecureStore.setItemAsync("rn-password", password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      ></TextInput>
      <Button title="Update password" onPress={handleStore}></Button>
      <Text>Password will go here! {password}</Text>
    </View>
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

// // Spread
// // ...

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [...arr1];
// arr2.push(6);
// arr1.push(7);

// console.log(arr1);
// console.log(arr2);
// console.log(...arr2);

// // Rest
// // ...
// const names = ["T", "Paul", "Tony", "Mike", "Dom"];

// const [firstName, ...rest] = names;

// console.log(firstName, rest);
