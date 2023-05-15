import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import getStyles from "../styles";

const NewsArticle = ({ title, summary = "", isDarkMode = {} }) => {
  const [likes, setLikes] = useState(0);
  const styles = getStyles(isDarkMode);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <View style={styles.newsArticle}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.summary}>{summary}</Text>
      <TouchableOpacity style={styles.likeButton} onPress={handleLike}>
        <Text style={styles.likeText}>Like</Text>
        <Text style={styles.likeCount}>{likes}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewsArticle;
