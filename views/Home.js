import {View, Image, StyleSheet, Dimensions, Text} from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <View>
      <Image
        source={require('../assets/images/deal1.png')}
        style={styles.img}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: Dimensions.get('window').width,
    resizeMode: 'cover',
  },
});
