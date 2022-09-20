import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import MenuItem from '../components/MenuItem';

export default function Menu() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.header.text}>Menu</Text>
      </View>
      <ScrollView style={styles.parent}>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    padding: 20,
    shadowColor: 'black',
    elevation: 4,
    text: {
      fontFamily: 'Poppins-Medium',
      fontSize: 20,
    },
  },
  parent: {
    margin: 15,
  },
});
