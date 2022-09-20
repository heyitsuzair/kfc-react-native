import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

export default function Menu() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.header.text}>Menu</Text>
      </View>
      <ScrollView></ScrollView>
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
});
