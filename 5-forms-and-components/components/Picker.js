import { Picker, Text } from "@react-native-picker/picker";

export default function CustomPicker({
  options,
  value,
  setValue,
  width = 300,
}) {
  return (
    <Picker selectedValue={value} onValueChange={setValue} style={{ width }}>
      {options.map((option, index) => {
        return (
          <Picker.Item
            label={`${index + 1} - ${option}`}
            value={option}
            key={option}
          />
        );
      })}
    </Picker>
  );
}
