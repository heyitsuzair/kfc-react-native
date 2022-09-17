import {Dimensions, Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';

export default function Button({text, action, color, width}) {
  const styles = StyleSheet.create({
    parent: {
      backgroundColor: color === 'primary' ? '#e4002b' : 'black',
      borderRadius: 8,
    },
    text: {
      color: 'white',
      padding: 20,
      width: width === 'full' ? Dimensions.get('window').width - 100 : '',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '700',
    },
  });

  return (
    <Pressable style={styles.parent} onPress={() => action()}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}
