import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const styles = StyleSheet.create({
  containerPortrait: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "skyblue",
  },
  containerLandscape: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "coral",
  },
  title: { fontWeight: "bold", fontSize: 20 },
  author: { color: "grey", marginBottom: 10 },
  heading: { marginTop: 10 },
});

export default function App() {
  const [orientation, setOrientation] = React.useState("PORTRAIT");

  React.useEffect(() => {
    const updateOrientation = () => {
      const { width, height } = Dimensions.get("window");
      setOrientation(width < height ? "PORTRAIT" : "LANDSCAPE");
    };

    Dimensions.addEventListener("change", updateOrientation);
  }, []);

  return (
    <View
      style={
        orientation === "PORTRAIT"
          ? styles.containerPortrait
          : styles.containerLandscape
      }
    >
      <Text>Current orientation is {orientation}</Text>
      <Text style={styles.title}>Book Review: "Becoming"</Text>
      <Text style={styles.author}>By Michelle Obama</Text>
      <Text>Rating: 4.5/5</Text>
      <Text style={styles.heading}>Review:</Text>
      <Text>
        "Becoming" is an inspiring memoir. Michelle Obama invites readers into
        her world, chronicling the experiences that have shaped her.
      </Text>
      <Text>
        From her childhood on the South Side of Chicago to her years as an
        executive balancing the demands of motherhood and work, to her time
        spent at the world's most famous address.
      </Text>
      <Text>
        With unerring honesty and lively wit, she describes her triumphs and her
        disappointments, both public and private.
      </Text>
      <Text>
        A deeply personal reckoning of a woman of soul and substance who has
        steadily defied expectations.
      </Text>
    </View>
  );
}
