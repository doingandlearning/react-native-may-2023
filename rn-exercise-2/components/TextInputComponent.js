import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

export default function TextInputComponent({
  placeholder,
  value,
  setValue,
  borderWidth = 1,
  borderColor = "black",
  style,
  specialOffer = false,
}) {
  return (
    <TextInput
      style={[
        styles.input,
        { borderWidth, borderColor },
        style,
        specialOffer && { fontWeight: "bold" },
      ]}
      placeholder={placeholder}
      value={value}
      onChangeText={setValue}
    />
  );
}

export const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 10,
    paddingLeft: 8,
  },
});
