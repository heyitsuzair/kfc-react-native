import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {List} from 'react-native-paper';
import colors from '../colors';

export default function BucketItemInfo({navigation}) {
  // when someone presses cross
  const handleOnPress = () => {
    // navigate the person back to the screen from where it came
    navigation.goBack();
  };

  // handle when someone presses add to cart
  const updateItem = () => {
    alert('hello');
  };

  // handle when someone clicks on plus or minus
  const handleQuantity = condition => {
    if (condition === '+') {
      alert('Plus');
    } else {
      alert('Minus');
    }
  };

  // handle when someone clicks on remove
  const handleRemove = () => {
    alert('Remove');
  };

  return (
    <>
      <ScrollView style={styles.parent}>
        <View>
          <MaterialCommunityIcons
            style={styles.close}
            name="close-circle"
            color="white"
            size={40}
            onPress={() => handleOnPress()}
          />
          <Image
            style={styles.img}
            source={require('../assets/images/deal1.png')}
          />
        </View>
        <View style={styles.inner}>
          <View style={styles.row}>
            <Text adjustsFontSizeToFit numberOfLines={1} style={styles.text}>
              Krunch Chicken Combo
            </Text>
            <Text adjustsFontSizeToFit numberOfLines={1} style={styles.text}>
              PKR 460
            </Text>
          </View>
          <View>
            <Text style={styles.remove} onPress={() => handleRemove()}>
              Remove
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.fixedBar}>
        <View style={styles.quantity}>
          <Pressable onPress={() => handleQuantity('-')}>
            <List.Icon icon="minus" color={colors.primary} />
          </Pressable>
          <Text icon="minus" color={colors.primary}>
            1
          </Text>
          <Pressable onPress={() => handleQuantity('+')}>
            <List.Icon icon="plus" color={colors.primary} />
          </Pressable>
        </View>
        <Pressable style={styles.addToCart} onPress={() => updateItem()}>
          <Text style={styles.addToCartText}>Update</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  close: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 999,
  },
  img: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 1.5,
    resizeMode: 'cover',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
  },
  inner: {
    padding: 20,
  },
  remove: {
    color: colors.primary,
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
  },
  fixedBar: {
    padding: 7,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopColor: colors.bg,
    borderTopWidth: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addToCart: {
    backgroundColor: colors.primary,
    paddingTop: 10,
    paddingBottom: 7,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 5,
  },
  addToCartText: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
});
