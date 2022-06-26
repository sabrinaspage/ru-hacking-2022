import React from "react";
import { Button, View, Pressable } from 'react-native';
import firebase from 'firebase';
import config from '../components/db';
import { Header2 } from '../components/Text/Header';
import GenericTextInput from "../components/Text/GenericTextInput";
import { SmallBlackButton } from "../components/Buttons/BlackButton";
import { SmallWhiteButton } from "../components/Buttons/WhiteButton";
import OrDivider from "../components/Divider/OrDivider";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Login({ navigation }) {
  const state = { email: 'edvan@fgf.edu.br', password: '123456', errorMessage: null }
  const LEFTHANDSIDE = 30;

  const handleLogin = () => {
    const { email, password } = this.state
    
    firebase.initializeApp(config);
 
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
  
  return (
    <View style={{ flex: 1 }}> 
      <View style={{ left: LEFTHANDSIDE, top: 110, }}> 
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={40} color="black" />
        </Pressable>
      </View>
      <View style={{ left: 145, top: 68, }}>
        <Header2 title="Log In"/>
      </View>
      <View style={{ left: LEFTHANDSIDE, top: 248, }}>
        <GenericTextInput startText="Email" /> 
      </View>
      <View style={{ left: LEFTHANDSIDE, top: 328, }}>
        <GenericTextInput startText="Password" />
      </View>
      <View style={{ left: LEFTHANDSIDE, top: 518}}> 
        <SmallBlackButton title="Continue" navigationRoute="OTPVerification"/>
      </View>
      <View style={{ left: LEFTHANDSIDE, top: 608}}>
        <OrDivider />
      </View>
      <View style={{ left: LEFTHANDSIDE, top: 652}}>
        <SmallBlackButton title="Continue with Google" navigationRoute="OTPVerification"/>
      </View>
      <View style={{ left: LEFTHANDSIDE, top: 708}}>
        <SmallWhiteButton title="Continue with Apple" navigationRoute="OTPVerification"/>
      </View>
    </View>
  );
}