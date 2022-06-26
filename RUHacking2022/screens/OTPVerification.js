import React from "react";
import { Button, View, Pressable } from 'react-native';
import firebase from 'firebase';
import config from '../components/db';
import { Header2 } from '../components/Text/Header';
import GenericTextInput from "../components/Text/GenericTextInput";
import { BlackButton } from "../components/Buttons/BlackButton";
import { Subtitle } from "../components/Text/Subtitle"
import Ionicons from '@expo/vector-icons/Ionicons';

export default function OTPVerification({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ left: 30, top: 110, }}> 
        <Pressable onPress={() => navigation.goBack()}>
         <Ionicons name="arrow-back-outline" size={40} color="black" />
        </Pressable>
      </View>
      <View style={{ left: 62, top: 218, }}>
        <Header2 title="OTP Verification"/>
      </View>
      <View style={{ left: 85, top: 278, }}>
        <Subtitle text={"Enter the OTP sent to"} subtext={"+1 (234) 567-8910"} />
      </View>
      <View style={{ left: 30, top: 600}}>
        <BlackButton title="Sign Up" navigationRoute="Registration"/>
      </View>
    </View>
  );
}