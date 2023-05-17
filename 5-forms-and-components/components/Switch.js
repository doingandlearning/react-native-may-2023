import { Switch, Text, View } from "react-native";

export default function CustomSwitch({ label, value, setValue }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={[{ paddingRight: 30 }, value && { color: "green" }]}>
        {label}
      </Text>
      <Switch value={value} onValueChange={setValue} testID="switch"></Switch>
    </View>
  );
}
