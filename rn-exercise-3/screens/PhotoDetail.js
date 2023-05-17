import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Photo from "../components/Photo";
const PhotoDetail = ({ route }) => {
  const { item } = route.params;

  return <Photo item={item} withImage={true} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    height: 300,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default PhotoDetail;
