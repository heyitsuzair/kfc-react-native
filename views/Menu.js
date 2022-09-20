import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import MenuItem from '../components/MenuItem';

export default function Menu({navigation}) {
  // handle when someone presses on any menu item
  const handleMenuPress = (title, id) => {
    navigation.navigate('MenuProducts', {
      id: id,
      title: title,
    });
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.header.text}>Menu</Text>
      </View>
      <ScrollView style={styles.parent}>
        <MenuItem handleMenuPress={handleMenuPress} />
        <MenuItem handleMenuPress={handleMenuPress} />
        <MenuItem handleMenuPress={handleMenuPress} />
        <MenuItem handleMenuPress={handleMenuPress} />
        <MenuItem handleMenuPress={handleMenuPress} />
        <MenuItem handleMenuPress={handleMenuPress} />
        <MenuItem handleMenuPress={handleMenuPress} />
        <MenuItem handleMenuPress={handleMenuPress} />
        <MenuItem handleMenuPress={handleMenuPress} />
        <MenuItem handleMenuPress={handleMenuPress} />
        <MenuItem handleMenuPress={handleMenuPress} />
        <MenuItem handleMenuPress={handleMenuPress} />
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
