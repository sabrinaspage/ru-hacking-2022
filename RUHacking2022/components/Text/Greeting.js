import React from "react";
import { Text, StyleSheet } from 'react-native';


export function Greeting({ text, subtext }) {
  return (
    <>
      <Text style={styles.greeting}>Good Morning,{"\n"}
        <Text style={{...styles.greeting, fontWeight: "bold"}}>{subtext}</Text>
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  greeting: {position: "absolute", height: 48, fontFamily: "'Poppins'", fontStyle: "normal", fontWeight: "normal", fontSize: 15, lineHeight: 24, letterSpacing: 0.75, color: "#6E7191"},
});