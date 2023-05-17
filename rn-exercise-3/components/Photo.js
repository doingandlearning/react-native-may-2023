import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Photo = ({ item, withImage = false }) => {
  const filename = `../assets/gallery/${item.filename}.jpg`;
  return (
    <View style={styles.container}>
      {Boolean(withImage) && (
        <Image source={{ uri: filename }} style={styles.image} />
      )}
      <Text style={styles.text}>{item.filename}</Text>
      <Text style={styles.text}>{item.photographer}</Text>
      <Text style={styles.text}>{item.category}</Text>
      <Text style={styles.text}>{item.desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 1,
  },
  image: {
    height: 150,
    resizeMode: "contain",
  },
  text: {
    padding: 10,
    color: "black",
  },
});

export default Photo;
