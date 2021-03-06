import React from "react";
import { Text, StyleSheet } from 'react-native';

export function Caption({ text, subtext }) {
  return (
    <Text style={styles.caption}>{text}
      <Text style={{...styles.caption, fontWeight: "bold"}}>{subtext}</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  caption: {position: "absolute", textAlign: 'center', height: 64, fontFamily: "'Poppins'", fontStyle: "normal", fontWeight: "normal", fontSize: 15, lineHeight: 32, letterSpacing: 0.75, color: "#262338"},
});