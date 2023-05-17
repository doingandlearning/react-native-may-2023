import { Picker, Text } from "@react-native-picker/picker";

export default function CustomPicker({
  options,
  value,
  setValue,
  width = 300,
}) {
  return (
    <Picker selectedValue={value} onValueChange={setValue} style={{ width }}>
      {options.map((option) => {
        return <Picker.Item label={option} value={option} key={option} />;
      })}
    </Picker>
  );
}
