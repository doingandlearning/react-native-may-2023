import { View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Button title="Todos" onPress={() => navigation.navigate("Todos")} />
      <Button title="Open drawer!" onPress={() => navigation.openDrawer()} />
    </View>
  );
}
