import React from "react";
import { Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export function Caption({ text, subtext }) {
  return (
    <Text style={styles.caption}>{text}</Text>
  );
}

const styles = StyleSheet.create({
  caption: {position: "absolute", textAlign: 'center', height: 64, fontFamily: "'Poppins'", fontStyle: "normal", fontWeight: "normal", fontSize: 20, lineHeight: 32, letterSpacing: 0.75, color: "#262338"},
});