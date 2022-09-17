import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import Button from '../components/Button/Button';

export default function Auth() {
  return (
    <View>
      <View style={styles.parent}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.login}>
        <Button
          width="full"
          text={'Login With Google'}
          action={''}
          color="primary"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f0f2f5',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 200,
  },
  login: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
