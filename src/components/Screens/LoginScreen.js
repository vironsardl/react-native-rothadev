import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function Login() {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Weclome</Text>
      </View>
      <View style={styles.body}>
        <ScrollView>
          <Text style={styles.loginTitle}>Login Account</Text>
          <Text style={styles.description}>
            Hello, you must login first to be able to use the application and
            enjoy all the features.
          </Text>
          <TextField title="Email" style={{marginBottom: 16}} />
          <TextField title="Password" />

          <View style={{alignItems: 'flex-end', marginVertical: 16}}>
            <Text style={{color: '#6B46FF', fontWeight: 700}}>
              Forgot Passowrd?
            </Text>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: '#6B46FF',
              padding: 15,
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
              Sign In
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
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
          borderRadius: 8,
          paddingVertical: 12,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    height: '100%',
  },
  header: {
    backgroundColor: '#cccccc',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  body: {
    flex: 1,
    padding: 16,
  },
  loginTitle: {
    fontSize: 18,
    color: '#222222',
    fontWeight: 'bold',
  },
  description: {
    color: '#888888',
    marginVertical: 16,
  },
});
