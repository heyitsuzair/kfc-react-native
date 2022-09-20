import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import React from 'react';
import colors from '../../../colors';

export default function index({handleOnPress}) {
  return (
    <Pressable style={styles.parent} onPress={() => handleOnPress()}>
      <Image
        style={styles.img}
        source={require('../../../assets/images/deal1.png')}
      />
      <Text style={styles.text}>Krunch Burger</Text>
      <View style={styles.info}>
        <Text style={styles.price}>PKR 250</Text>
        <Text style={styles.orderNow}>Order</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  parent: {
    marginBottom: 15,
    overflow: 'hidden',
  },
  img: {
    width: Dimensions.get('window').width,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  text: {
    color: colors.primary,
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 10,
    marginBottom: 10,
  },
  info: {
    backgroundColor: colors.primary,
    padding: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    width: Dimensions.get('window').width / 2,
    backgroundColor: 'white',
    padding: 10,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
  },
  orderNow: {
    width: Dimensions.get('window').width / 2,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
  },
});
