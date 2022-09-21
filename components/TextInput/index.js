import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../colors';

export default function index({
  label,
  value,
  editable,
  onChangeText,
  keyboardType,
  maxLength,
}) {
  const onChange = incomingValue => {
    if (onChangeText === false) {
      return;
    } else {
      onChangeText(incomingValue);
    }
  };

  return (
    <View style={styles.parent}>
      <Text style={styles.poppins}>{label}</Text>
      <TextInput
        style={[styles.poppins, styles.input]}
        editable={editable}
        placeholder={label}
        maxLength={maxLength}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChange}
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
