import React from "react";
import { View, Text } from "react-native";
import getStyles from "../styles";

export default function Footer({ isDarkMode = false }) {
  const styles = getStyles(isDarkMode);
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2023 React Native Radar</Text>
    </View>
  );
}
