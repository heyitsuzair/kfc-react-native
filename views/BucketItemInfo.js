import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {List} from 'react-native-paper';
import colors from '../colors';
import cartContext from '../context/cart/CartContext';
import Loading from '../components/Loading';

export default function BucketItemInfo({navigation, route}) {
  // following context to get cartItems and filter the specific one that is coming through "prodId" params
  const {cartItems, deleteCartItem, updateCartItem} = useContext(cartContext);

  // state for loading
  const [loading, setLoading] = useState(true);

  // state to item info
  const [item, setItem] = useState(null);

  // state to hold product quantity
  const [quantity, setQuantity] = useState(1);

  // when someone presses cross
  const handleOnPress = () => {
    // navigate the person back to the screen from where it came
    navigation.goBack();
  };

  // handle when someone clicks on plus or minus
  const handleQuantity = condition => {
    if (condition === '+') {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      // calling "updateCartItem" function in cartState
      updateCartItem(item.prod_id, newQuantity, '+');
    } else {
      if (quantity === 1) {
        return;
      } else {
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
        // calling "updateCartItem" function in cartState
        updateCartItem(item.prod_id, newQuantity, '-');
      }
    }
  };

  // handle when someone clicks on remove
  const handleRemove = () => {
    navigation.goBack();
    deleteCartItem(item);
  };

  // get the info of product from "cartItems" that is incoming from "prodId" parameter
  const getItemInfo = () => {
    const filter = cartItems.filter(item => {
      return item.prod_id === route.params.prodId;
    });
    setItem(filter[0]);

    setQuantity(filter[0].quantity);
    setLoading(false);
  };

  useEffect(() => {
    getItemInfo();
  }, [route.params.prodId]);

  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <>
          <ScrollView style={styles.parent}>
            <View>
              <MaterialCommunityIcons
                style={styles.close}
                name="close-circle"
                color={colors.primary}
                size={40}
                onPress={() => handleOnPress()}
              />
              <Image
                style={styles.img}
                source={{
                  uri: item.product.src === undefined ? '' : item.product.src,
                }}
              />
            </View>
            <View style={styles.inner}>
              <View style={styles.row}>
                <Text
                  adjustsFontSizeToFit
                  numberOfLines={1}
                  style={styles.text}>
                  {item.product.title} x {item.quantity}
                </Text>
                <Text
                  adjustsFontSizeToFit
                  numberOfLines={1}
                  style={styles.text}>
                  PKR {item.product.price * item.quantity}
                </Text>
              </View>

              <View style={styles.addonsRow}>
                {item.addons.length > 0
                  ? item.addons.map((item, index) => {
                      return (
                        <View style={styles.addonsInner} key={index}>
                          <Text>
                            {item.addon.name} x {item.quantity}
                          </Text>
                          <Text>PKR {item.addon.price * item.quantity}</Text>
                        </View>
                      );
                    })
                  : ''}
              </View>
              <View style={styles.addonsRow}>
                <View style={styles.addonsInner}>
                  <Text>
                    {item.softDrinks[0].softDrink.name} x{' '}
                    {item.softDrinks[0].quantity}
                  </Text>
                  <Text>
                    PKR{' '}
                    {item.softDrinks[0].softDrink.price *
                      item.softDrinks[0].quantity}
                  </Text>
                </View>
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
                {quantity}
              </Text>
              <Pressable onPress={() => handleQuantity('+')}>
                <List.Icon icon="plus" color={colors.primary} />
              </Pressable>
            </View>
            <Pressable
              style={styles.addToCart}
              onPress={() => navigation.goBack()}>
              <Text style={styles.addToCartText}>Update</Text>
            </Pressable>
          </View>
        </>
      )}
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
    resizeMode: 'contain',
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
  addonsInner: {
    marginTop: 10,
    marginBottom: 10,
  },
});
