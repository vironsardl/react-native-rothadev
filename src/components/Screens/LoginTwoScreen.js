import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function LoginTwoScreen() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View>
          <ScrollView>
            <Text style={styles.title}>Login Account</Text>
            <Text style={styles.description}>
              Hello, you must login first to be able to use the application and
              enjoy all the features.
            </Text>
            <TextField title="Email" />
            <TextField title="Password" />

            <View style={{alignItems: 'flex-end', marginVertical: 16}}>
              <Text style={{color: '#6B46FF', fontWeight: 700}}>
                Forgot Passowrd?
              </Text>
            </View>

            <MyButton>Sign In</MyButton>

            <View style={styles.dontHaveAccContainer}>
              <View style={styles.ruler}></View>
              <Text style={styles.dontHaveAccText}>Don't have account?</Text>
              <View style={styles.ruler}></View>
            </View>

            <View style={styles.btnContactOrRegisterContainer}>
              <MyButton
                style={{flex: 1, backgroundColor: '#888888', marginRight: 16}}>
                Contact
              </MyButton>
              <MyButton style={{flex: 1, backgroundColor: '#FF5C00'}}>
                Register
              </MyButton>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

function MyButton(props) {
  return (
    <View
      style={[
        {
          backgroundColor: '#6B46FF',
          height: 50,
          borderRadius: 25,
          alignItems: 'center',
          justifyContent: 'center',
        },
        props.style,
      ]}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
        {props.children}
      </Text>
    </View>
  );
}

function TextField(props) {
  return (
    <View style={props.style}>
      <Text style={{color: '#8888888'}}>{props.title}</Text>
      <TextInput
        style={{
          borderColor: '#cccccc',
          borderWidth: 1,
          borderRadius: 16,
          paddingVertical: 12,
          paddingHorizontal: 6,
          marginBottom: 8,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#cccccc',
    height: '100%',
    paddingHorizontal: 20,
    paddingVertical: 100,
  },
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    borderRadius: 16,
    padding: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    color: '#cccccc',
    textAlign: 'center',
    marginBottom: 16,
  },
  ruler: {
    flex: 1,
    borderBottomColor: '#DADADA',
    borderBottomWidth: 1,
  },
  dontHaveAccContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  dontHaveAccText: {
    marginHorizontal: 16,
  },
  btnContactOrRegisterContainer: {
    flexDirection: 'row',
  },
});
