import {Dimensions, TouchableOpacity, StyleSheet, Text} from 'react-native';
import React from 'react';
import colors from '../../colors';

export default function Button({text, action, color, width, icon}) {
  const styles = StyleSheet.create({
    parent: {
      backgroundColor: color === 'primary' ? colors.primary : 'black',
      borderRadius: 8,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: width === 'full' ? Dimensions.get('window').width - 100 : '',
    },
    text: {
      color: 'white',
      padding: 20,
      textAlign: 'center',
      fontSize: 20,
      fontFamily: 'Poppins-SemiBold',
    },
  });

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.parent}
      onPress={action}>
      <Text style={styles.text}>{text}</Text>
      {icon}
    </TouchableOpacity>
  );
}
