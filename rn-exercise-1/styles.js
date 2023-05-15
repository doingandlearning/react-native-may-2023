import { StyleSheet, Platform } from "react-native";

const getStyles = (isDarkMode) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? "#000" : "#fff",
    },
    newsArticle: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: isDarkMode ? "#FFF" : "#000",
    },
    summary: {
      color: isDarkMode ? "#FFF" : "#000",
    },
    likeButton: {
      marginTop: 10,
      padding: 10,
      backgroundColor: "#007BFF",
      borderRadius: 5,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    likeText: {
      color: "#fff",
      marginRight: 10,
    },
    likeCount: {
      color: "#fff",
      fontWeight: "bold",
    },
    header: {
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: isDarkMode ? "#444" : "#007BFF",
    },
    headerText: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "bold",
      backgroundColor: isDarkMode ? "#444" : "#007BFF",
    },
    footer: {
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: isDarkMode ? "#444" : "#007BFF",
    },
    footerText: {
      color: "#fff",
      fontSize: 16,
      backgroundColor: isDarkMode ? "#444" : "#007BFF",
    },
  });

export default getStyles;
