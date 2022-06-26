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

export default function Registration({ navigation }) {
  const state = { email: '', password: '', errorMessage: null }

  const handleSignUp = () => {

    firebase.initializeApp(config);

    const { email, password } = this.state
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ left: 30, top: 110, }}> 
        <Pressable onPress={() => navigation.goBack()}>
         <Ionicons name="arrow-back-outline" size={40} color="black" />
        </Pressable>
      </View>
      <View style={{ left: 129, top: 68, }}>
        <Header2 title="Sign Up"/>
      </View>
      <View style={{ left: 30, top: 168, }}>
        <GenericTextInput startText="Name" />
      </View>
      <View style={{ left: 30, top: 248, }}>
        <GenericTextInput startText="Email" />
      </View>
      <View style={{ left: 30, top: 328, }}>
        <GenericTextInput startText="Phone Number" />
      </View>
      <View style={{ left: 30, top: 408, }}>
        <GenericTextInput startText="Password" />
      </View>
      <View style={{ left: 30, top: 518}}>
        <SmallBlackButton title="Continue" navigationRoute="OTPVerification"/>
      </View>
      <View style={{ left: 30, top: 608}}>
        <OrDivider />
      </View>
      <View style={{ left: 30, top: 652}}>
        <SmallBlackButton title="Continue with Google" navigationRoute="OTPVerification"/>
      </View>
      <View style={{ left: 30, top: 708}}>
        <SmallWhiteButton title="Continue with Apple" navigationRoute="OTPVerification"/>
      </View>
    </View>
  );
}