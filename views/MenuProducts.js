import {StyleSheet, ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../components/Cards/Product';
import {Toast} from 'toastify-react-native';

export default function MenuProducts({route, navigation}) {
  const checkIfMidnight = () => {
    if (route.params.title === 'Midnight') {
      const getHour = new Date().getHours();
      getHour > 2 ? navigation.goBack() : '';
      Toast.warn('Available From 12AM To 2AM Only!');
    } else {
      return;
    }
  };

  useEffect(() => {
    // changing header title according to the title incoming
    navigation.setOptions({
      title: route.params.title,
    });
    checkIfMidnight();
    //eslint-disable-next-line
  }, []);

  // handle when someone clicks on card
  const handleOnPress = () => {
    navigation.navigate('singleProduct');
  };

  return (
    <ScrollView>
      <View style={styles.parent}>
        <Card handleOnPress={handleOnPress} />
        <Card handleOnPress={handleOnPress} />
        <Card handleOnPress={handleOnPress} />
        <Card handleOnPress={handleOnPress} />
        <Card handleOnPress={handleOnPress} />
        <Card handleOnPress={handleOnPress} />
        <Card handleOnPress={handleOnPress} />
        <Card handleOnPress={handleOnPress} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  parent: {
    margin: 10,
  },
});
