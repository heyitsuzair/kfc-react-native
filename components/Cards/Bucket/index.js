import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function index({navigation, prod}) {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('bucketItemInfo', {
          prodId: prod.prod_id,
        })
      }
      style={styles.parent}>
      <View style={styles.leftSide}>
        <Image source={{uri: prod.product.src}} style={styles.img} />
        <View style={styles.info}>
          <Text adjustsFontSizeToFit numberOfLines={1} style={styles.title}>
            {prod.product.title}
          </Text>
          <Text style={styles.quantity} adjustsFontSizeToFit numberOfLines={1}>
            {prod.quantity} x PKR {prod.product.price}
          </Text>
        </View>
      </View>
      <View style={styles.rightSide}>
        <Text style={styles.totalPrice} adjustsFontSizeToFit numberOfLines={1}>
          PKR {prod.product.price * prod.quantity}
        </Text>
        <Icon name="chevron-right" size={30} />
      </View>
    </Pressable>
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
    fontSize: 19,
  },
  quantity: {
    fontFamily: 'Poppins-Medium',
  },
  rightSide: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});
