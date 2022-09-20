import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

export default function MenuProducts({route, navigation}) {
  useEffect(() => {
    // changing header title according to the title incoming
    navigation.setOptions({
      title: route.params.title,
    });
    //eslint-disable-next-line
  }, []);

  return (
    <View>
      <Text>{route.params.id}</Text>
      <Text>{route.params.title}</Text>
    </View>
  );
}
