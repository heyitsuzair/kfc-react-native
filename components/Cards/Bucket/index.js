import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function index() {
  return (
    <View style={styles.parent}>
      <View style={styles.leftSide}>
        <Image
          source={require('../../../assets/images/deal1.png')}
          style={styles.img}
        />
        <View style={styles.info}>
          <Text adjustsFontSizeToFit numberOfLines={1} style={styles.title}>
            Krunch Burger
          </Text>
          <Text adjustsFontSizeToFit numberOfLines={1}>
            4 x PKR 460
          </Text>
        </View>
      </View>
      <View style={styles.rightSide}>
        <Text style={styles.totalPrice} adjustsFontSizeToFit numberOfLines={1}>
          PKR 1840
        </Text>
        <Icon name="chevron-right" size={30} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSide: {
    flexDirection: 'row',
  },
  img: {
    width: 80,
    height: 80,
  },
  info: {
    justifyContent: 'space-around',
    paddingLeft: 10,
  },
  title: {
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
  },
  totalPrice: {
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
  },
  rightSide: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});
