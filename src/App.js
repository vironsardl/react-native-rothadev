import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Layout from './components/Layout';
import Login from './components/Screens/LoginScreen';
import LoginThreeScreen from './components/Screens/LoginThreeScreen';
import FoodScreen from './components/Screens/FoodScreen';

const App = () => {
  return (
    <SafeAreaView>
        <FoodScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default App;
