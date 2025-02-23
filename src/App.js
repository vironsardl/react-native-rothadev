import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Layout from './components/Layout';
import Login from './components/Screens/LoginScreen';
import LoginTwoScreen from './components/Screens/LoginTwoScreen';

const App = () => {
  return (
    // <SafeAreaView>
        <LoginTwoScreen />
        // {/* <Layout /> */}
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default App;
