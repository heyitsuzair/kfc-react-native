import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../colors';

export default function index({label, value, editable, onChangeText}) {
  return (
    <View style={styles.parent}>
      <Text style={styles.poppins}>{label}</Text>
      <TextInput
        style={[styles.poppins, styles.input]}
        editable={editable}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    borderBottomColor: colors.bg,
    borderBottomWidth: 3,
    marginBottom: 20,
  },
  poppins: {
    fontFamily: 'Poppins-Medium',
  },
  input: {
    color: 'black',
  },
});
