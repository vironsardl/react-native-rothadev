import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function IconButton(params) {
  return (
    <View style={styles.main}>
      {params.children}
      <View
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          backgroundColor: 'red',
          borderRadius: 10,
          paddingHorizontal: 4,
        }}>
        {params.badge && (
          <Text style={{fontSize: 10, fontWeight: 'bold', color: 'white'}}>
            {params.badge}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 8,
  },
});
