import {StyleSheet, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import Card from '../components/Cards/Product';

export default function MenuProducts({route, navigation}) {
  useEffect(() => {
    // changing header title according to the title incoming
    navigation.setOptions({
      title: route.params.title,
    });
    //eslint-disable-next-line
  }, []);

  // handle when someone clicks on card
  const handleOnPress = () => {
    navigation.navigate('singleProduct');
  };

  return (
    <ScrollView style={styles.parent}>
      <Card handleOnPress={handleOnPress} />
      <Card handleOnPress={handleOnPress} />
      <Card handleOnPress={handleOnPress} />
      <Card handleOnPress={handleOnPress} />
      <Card handleOnPress={handleOnPress} />
      <Card handleOnPress={handleOnPress} />
      <Card handleOnPress={handleOnPress} />
      <Card handleOnPress={handleOnPress} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  parent: {
    padding: 10,
  },
});