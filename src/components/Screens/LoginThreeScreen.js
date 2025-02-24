import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {SvgPath} from '../../configs/SvgPath.js';

export default function LoginThreeScreen() {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.txtbodyTitle}>Login Account</Text>
        <Text style={styles.txtbodyDescription}>
          Hello, you must login first to be able to use the application and
          enjoy all the features.
        </Text>
        <InputSection icon={<SvgPath.phone />} label="Phone Number">
          <View style={styles.phoneContainer}>
            <View style={styles.btnSelectCountryCode}>
              <Text>+855</Text>
              <SvgPath.arrowDown />
            </View>
            <TextInput
              style={styles.phoneNumberInput}
              placeholder="Enter Phone Number"
              keyboardType="numeric"
            />
            <View style={styles.btnResendCode}>
              <Text style={styles.btnResendTitle}>Resend</Text>
            </View>
          </View>
        </InputSection>
        <InputSection icon={<SvgPath.message />} label="Verify Code">
          <View style={styles.verifyCodeContainer}>
            <VerifyCode />
            <VerifyCode />
            <VerifyCode />
            <VerifyCode />
          </View>
        </InputSection>
      </View>
    </View>
  );
}

function VerifyCode() {
  return (
    <TextInput
    style={styles.verifyCodeField}
    keyboardType="numeric"
    maxLength={1}
    textAlign="center"
  />
  )
}

function InputSection(params) {
  return (
    <View style={{paddingVertical: 16}}>
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        {params.icon}
        <Text style={{marginLeft: 10}}>{params.label}</Text>
      </View>
      {params.children}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#cccccc',
    width: '100%',
    height: '100%',
  },
  header: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cccccc',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  body: {
    backgroundColor: 'white',
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    flex: 1,
    padding: 16,
  },
  txtbodyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 18,
  },
  txtbodyDescription: {
    textAlign: 'center',
    color: '#888888',
  },
  phoneContainer: {
    flexDirection: 'row',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    padding: 4,
  },
  btnSelectCountryCode: {
    flexDirection: 'row',
    backgroundColor: 'rgba(218, 218, 218, 0.5)',
    height: '100%',
    borderColor: '#DADADA',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  phoneNumberInput: {
    flex: 1,
    paddingHorizontal: 16,
  },
  btnResendCode: {
    backgroundColor: '#6B46FF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  btnResendTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
  verifyCodeField: {
    width: 50,
    height: 50,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
  },
  verifyCodeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
