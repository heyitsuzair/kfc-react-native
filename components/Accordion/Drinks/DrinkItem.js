import {View, Pressable, Text, StyleSheet} from 'react-native';
import React from 'react';
import {RadioButton} from 'react-native-paper';
import colors from '../../../colors';

export default function DrinkItem({
  handleOnPressDrink,
  index,
  selectedDrink,
  drink,
}) {
  return (
    <View style={styles.parent}>
      <Pressable
        style={styles.inner}
        onPress={() => handleOnPressDrink(index, drink, 1)}>
        <RadioButton
          color={colors.primary}
          status={
            selectedDrink === null
              ? ''
              : selectedDrink.index === index
              ? 'checked'
              : 'unchecked'
          }
          value={drink._id}
        />
        <Text style={styles.text}>{drink.name}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: 'white',
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  text: {
    marginLeft: 10,
  },
});
