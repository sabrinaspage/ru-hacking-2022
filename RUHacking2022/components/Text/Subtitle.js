import React from "react";
import { Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export function Subtitle({ text, subtext }) {
  return (
    <>
      <Text style={styles.subtitle}>{text}{"\n"}
        <Text style={{...styles.subtitle, fontWeight: "bold"}}>{subtext}</Text>
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  subtitle: {position: "absolute", textAlign: 'center', height: 64, fontFamily: "'Poppins'", fontStyle: "normal", fontWeight: "normal", fontSize: 20, lineHeight: 32, textAlign: "center", letterSpacing: 0.75, color: "#262338"},
});