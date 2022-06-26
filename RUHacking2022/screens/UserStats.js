import { Button, View, Text } from 'react-native';
import React from "react";
import DefaultAvatar from "../components/Avatar/avatar";
import { Greeting } from "../components/Text/Greeting"
import { Header2 } from "../components/Text/Header"
import FirstCard from "../components/VitalSigns/FirstCard"
import SecondCard from "../components/VitalSigns/SecondCard"
import EmergencyCard from "../components/EmergencyCard/EmergencyCard"
import TabBar from "../components/TabBar/TabBar"

export default function UserStats({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ bottom: 100, left: 20 }}>
        <DefaultAvatar />
      </View>
      <View style={{ bottom: 700, left: 160 }}>
        <Greeting subtext="Sabrina"/>
      </View>
      <View style={{ bottom: 580, left: 20 }}>
        <Header2 title="Vital Signs"/>
      </View>
      <View style={{ bottom: 520, left: 20 }}>
        <FirstCard />
      </View>
      <View style={{ bottom: 775, left: 220 }}>
        <SecondCard />
      </View>
      <View style={{ bottom: 730, left: 30 }}>
        <EmergencyCard />
      </View>
      <View style={{ bottom: 670, left: 0 }}>
        <TabBar />
      </View>
    </View> 
  );
}