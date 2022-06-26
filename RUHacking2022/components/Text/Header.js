import React from "react";
import { Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export function Header2({ title }) {
  return (
    <Text style={styles.text2}>{title}</Text>
  );
}

const styles = StyleSheet.create({
  text2: {position: "absolute", height: 44, fontStyle: "normal", fontWeight: "bold", fontSize: 32, lineHeight: 44, textAlign: "center", letterSpacing: 1, color: "#262338"},
});