import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Layout(prop) {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.itemContainer,
          {backgroundColor: 'red', right: 0},
        ]}></View>
      <View
        style={[
          styles.itemContainer,
          {backgroundColor: 'blue', bottom: 0},
        ]}></View>
      <View style={styles.itemContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: 'lightblue',
    height: 300,
    width: 300,
  },
  itemContainer: {
    position: 'absolute',
    height: 50,
    width: 50,
    backgroundColor: 'green',
    margin: 5,
  },
});
