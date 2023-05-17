import React from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Photo from "../components/Photo";
import photos from "../data/photos.json";

const PhotoList = ({ navigation }) => {
  const handlePress = (item) => {
    navigation.navigate("PhotoDetail", { item });
  };

  return (
    <FlatList
      data={photos}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handlePress(item)}>
          <Photo item={item} />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.filename}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
  },
});

export default PhotoList;
