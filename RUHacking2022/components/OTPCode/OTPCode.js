import React, { useState } from "react";
import { StyleSheet, View } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'

export function OtpInputBlocks() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <OTPInputView
        style={{width: '70%', height: 200}}
        pinCount={4}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled = {(code) => {
            console.log(`Code is ${code}, you are good to go!`)
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  underlineStyleBase: {
    width: 60,
    height: 60,
    color: "black",
    fontWeight: "bold",
    fontSize: 24,
    backgroundColor: "#D9DBE9",
    borderRadius: 10,
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});