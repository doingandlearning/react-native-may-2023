import Slider from "@react-native-community/slider";

export default function CustomSlider({ min, max, value, setValue }) {
  return (
    <Slider
      style={{ width: 200, height: 40 }}
      minimumValue={min}
      maximumValue={max}
      maximumTrackTintColor="#1E272F"
      minimumTrackTintColor="#B30E10"
      value={value}
      onValueChange={setValue}
    />
  );
}
