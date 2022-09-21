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

export default function index({handleOnPress, prod, isMidnight}) {
  return (
    <Pressable
      style={styles.parent}
      onPress={() => {
        if (isMidnight === false) {
          return;
        } else {
          handleOnPress(prod._id);
        }
      }}>
      <Image style={styles.img} source={{uri: prod.prodImg}} />
      <Text style={styles.text}>{prod.name}</Text>
      <View style={styles.info}>
        {isMidnight === false ? (
          <Text style={styles.available}>Available From 12AM To 2AM</Text>
        ) : (
          <>
            <Text style={styles.price}>PKR {prod.price}</Text>
            <Text style={styles.orderNow}>Order</Text>
          </>
        )}
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
    resizeMode: 'contain',
    marginBottom: 10,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4,
  },
  text: {
    color: colors.primary,
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 1,
    marginBottom: 1,
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
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
    color: 'black',
  },
  orderNow: {
    width: Dimensions.get('window').width / 2.13,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
  },
  available: {
    width: Dimensions.get('window').width,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
  },
});
