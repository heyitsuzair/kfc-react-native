import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

export default function Payment({navigation}) {
  useEffect(() => {
    // setting the custom title of header
    navigation.setOptions({
      title: 'PKR 600',
    });
  }, []);

  return (
    <View style={styles.parent}>
      <Text>Payment</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    padding: 10,
  },
});
