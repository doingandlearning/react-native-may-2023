import React from "react";
import { View, Text } from "react-native";
import getStyles from "../styles";

const Header = ({ isDarkMode = true, howdensPage = "away" }) => {
  const styles = getStyles(isDarkMode);

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>React Native Radar ({howdensPage})</Text>
    </View>
  );
};

export default Header;
