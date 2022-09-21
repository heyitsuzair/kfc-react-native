import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import colors from '../../colors';
import {RadioButton} from 'react-native-paper';

export default function index({
  handlePress,
  index,
  value,
  label,
  selectedPayment,
}) {
  return (
    <Pressable style={styles.parent} onPress={() => handlePress(index, value)}>
      <Text style={styles.text}>
        {label} ({value})
      </Text>
      <RadioButton
        status={selectedPayment === index ? 'checked' : 'unchecked'}
        value={value}
        color={colors.primary}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  parent: {
    marginTop: 20,
    borderBottomColor: colors.bg,
    borderBottomWidth: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
  },
});
