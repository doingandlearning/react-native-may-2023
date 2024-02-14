import { Text, View, Pressable } from "react-native";
import { router } from "expo-router";
export default function Index() {
  return (
    <View>
      <Text>This is a view</Text>
      <Pressable onPress={() => router.replace("/about")}>
        <Text>Move</Text>
      </Pressable>
    </View>
  );
}
