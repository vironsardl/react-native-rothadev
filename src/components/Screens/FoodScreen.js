import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {SvgPath} from '../../configs/SvgPath';
import IconButton from './components/IconButton';
import FoodItem from './FoodItem';

export default function FoodScreen(params) {
  const data = [
    {
      id: 1,
      title: 'Pizza Corner',
      price: '10$',
      image: require('../../../assets/images/burger_set.png'),
    },
    {
      id: 2,
      title: 'Green Tea',
      price: '10$',
      image: require('../../../assets/images/burger_set.png'),
    },
    {
      id: 3,
      title: 'Olate',
      price: '20$',
      image: require('../../../assets/images/burger_set.png'),
    },
  ];

  const [badge, setBadge] = useState(0);

  return (
    <SafeAreaView>
      <View style={styles.foodOrderContainer}>
        <IconButton>
          <SvgPath.menu width={30} height={30} />
        </IconButton>
        <Text style={styles.foodTitle}>Food Order</Text>
        <IconButton badge={String(badge)}>
          <SvgPath.cart width={30} height={30} />
        </IconButton>
      </View>

      <ScrollView>
        {data.map((obj, index) => (
          <FoodItem key={index} model={obj} onPress={(value) => {
            setBadge(badge + 1);
          }}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  foodOrderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  foodTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
