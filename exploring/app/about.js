import { Text, View, Pressable } from "react-native";
import { router } from "expo-router";
export default function Index() {
  return (
    <View>
      <Text>This is about</Text>
      <Pressable onPress={() => router.replace("/")}>
        <Text>Move</Text>
      </Pressable>
    </View>
  );
}
