import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {List} from 'react-native-paper';

export default function index({handleMenuPress}) {
  return (
    <Pressable
      onPress={() => handleMenuPress('title', '1')}
      style={styles.parent}>
      <View style={styles.leftSection}>
        <Image
          style={styles.img}
          source={require('../../assets/images/logo.png')}
        />
        <Text>Hello</Text>
      </View>
      <View>
        <List.Icon icon="chevron-right" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    backgroundColor: 'red',
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 20,
  },
});
