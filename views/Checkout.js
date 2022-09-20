import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

export default function Checkout({navigation}) {
  useEffect(() => {
    // Set the custom title of header
    navigation.setOptions({
      title: 'PKR 600',
    });
  }, []);

  return (
    <View>
      <Text>Checkout</Text>
    </View>
  );
}
