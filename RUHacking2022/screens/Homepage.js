import React from "react";
import { Button, View, StyleSheet, Pressable, Text } from 'react-native';
import { BlackButton } from "../components/Buttons/BlackButton";
import { WhiteButton } from "../components/Buttons/WhiteButton";
import { useNavigation } from '@react-navigation/native';
import { HygiaIcon } from '../components/HygiaIcon/HygiaIcon.jsx';
import { Header2 } from '../components/Text/Header';

export default function Homepage() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View bottom={200} right={45}>
        <Header2 title="Hygia"/>
      </View>
      <View bottom={50}>
        <HygiaIcon />
      </View>
      <View style={{right: 160, top: 50}}>
        <BlackButton title="Sign Up" navigationRoute="Registration"/>
      </View>
      <View style={{right: 160, top: 125}}>
        <WhiteButton title="Log In" navigationRoute="Login"/>
      </View>
    </View>
  );
}
