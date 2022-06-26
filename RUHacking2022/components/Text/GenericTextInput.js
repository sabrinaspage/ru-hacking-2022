import React from "react";
import { TextInput, StyleSheet } from 'react-native';


export default function GenericTextInput({ startText }) {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
      placeholder={startText}
    />
  );
}

const styles = StyleSheet.create({
  input: {boxSizing: "border-box", position: "absolute", width: 328, height: 64, backgroundColor: "#EFF0F7", borderWidth: 2, borderColor: "#14142B", borderRadius: 16, paddingLeft: 20, fontSize: 15,},
});