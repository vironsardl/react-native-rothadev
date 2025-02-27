import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

export default function FoodItem(params) {
  const model = params.model;

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          margin: 16,
          borderRadius: 16,
          padding: 20,
          shadowOffset: {width: 10, height: 10},
          shadowColor: 'black',
          shadowOpacity: 1,
          elevation: 5,
          zIndex: 0,
        }}>
        <View
          style={{
            width: 150,
          }}></View>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            {model.title}
          </Text>
          <Text>Popular</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'red'}}>
            {model.price}
          </Text>
        </View>
        <TouchableOpacity
          style={{position: 'absolute', bottom: 0, right: 0}}
          onPress={() =>{
            params.onPress(model);
          }}
          >
          <View
            style={{
              backgroundColor: 'orange',
              paddingHorizontal: 16,
              borderTopLeftRadius: 16,
              borderBottomRightRadius: 16,
            }}>
            <Text style={{fontSize: 30, color: 'white'}}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{position: 'absolute'}}>
        <Image
          source={model.image}
          style={{
            width: 120,
            height: 120,
            borderRadius: 16,
            aspectRatio: 4 / 3,
          }}
        />
      </View>
    </View>
  );
}
