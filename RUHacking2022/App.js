import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Homepage from "./screens/Homepage";
import Login from "./screens/Login";
import OTPVerification from "./screens/OTPVerification";
import Registration from "./screens/Registration";
import SendPdf from "./screens/SendPdf";
import UserStats from "./screens/UserStats";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Home" component={Homepage} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="OTPVerification" component={OTPVerification} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SendPdf" component={SendPdf} />
      <Stack.Screen name="UserStats" component={UserStats} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
