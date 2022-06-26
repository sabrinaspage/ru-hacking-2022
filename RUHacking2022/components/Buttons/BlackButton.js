import React from "react";
import { Button, View, Pressable, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function BlackButton({ title, navigationRoute }) {
  const navigation = useNavigation(); 
  return (
    <Pressable style={styles.bigButton} onPress={() => navigation.navigate(navigationRoute)}>
      <Text style={styles.bigText}>{title}</Text>
    </Pressable>
  );
}

export function SmallBlackButton({ title, navigationRoute }) {
  const navigation = useNavigation(); 
  return (
    <Pressable style={styles.smallButton} onPress={() => navigation.navigate(navigationRoute)}>
      <Text style={styles.smallText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bigButton: {display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "16px 24px", gap: 12, position: "absolute", width: 328, height: 64, backgroundColor: "#14142B", borderRadius: 12},
  bigText: {width: 74, height: 32, fontFamily: "'Poppins'", fontStyle: "normal", fontWeight: "bold", fontSize: 18, lineHeight: 32, display: "flex", alignItems: "center", textAlign: "center", letterSpacing: 0.75, color: "#FCFCFC", flex: "none", order: 0, flexGrow: 0},
  smallButton: {display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "9px 22px", gap: 12, position: "absolute", width: 328, height: 40, backgroundColor: "#14142B", borderRadius: 8},
  smallText: {width: 139, height: 22, fontFamily: "'Poppins'", fontStyle: "normal", fontWeight: "bold", fontSize: 13, lineHeight: 22, display: "flex", alignItems: "center", textAlign: "center", letterSpacing: 0.25, color: "#FCFCFC", flex: "none", order: 0, flexGrow: 0},
});