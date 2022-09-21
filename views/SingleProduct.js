import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Button,
  Pressable,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DrinkAccordion from '../components/Accordion/Drinks/index';
import AddonAccordion from '../components/Accordion/Addons/index';
import {List} from 'react-native-paper';
import colors from '../colors';
import {Toast} from 'toastify-react-native';
import Container from 'toastify-react-native';
import axios from 'axios';
import {getAddons, getProductInfo, getSoftDrinks} from '../utils/apis';
import Loading from '../components/Loading';
import cartContext from '../context/cart/CartContext';
import addonContext from '../context/addon/AddonContext';
import SoftdrinkContext from '../context/softdrinks/SoftdrinkContext';

export default function SingleProduct({navigation, route}) {
  // context to add product
  const {addToCart, cartItems} = useContext(cartContext);

  // context to get addons quantity
  const {addonQuantity, setAddonQuantity} = useContext(addonContext);

  // context to get softDrinks quantity
  const {softDrinkQuantity, setSoftDrinkQuantity} =
    useContext(SoftdrinkContext);

  // state to hold product info
  const [product, setProduct] = useState([]);

  // state to check whether product is already in cart or not
  const [isInCart, setIsInCart] = useState(false);

  // state to hold addons
  const [addons, setAddons] = useState([]);

  // state to hold softDrinks
  const [softDrinks, setSoftDrinks] = useState([]);

  // loading state
  const [loading, setLoading] = useState(true);

  // current quantity for this product
  const [quantity, setQuantity] = useState(1);

  // when someone presses cross
  const handleOnPress = () => {
    // navigate the person back to the screen from where it came
    navigation.goBack();
  };

  // handle when someone presses add to cart
  const addProdToCart = () => {
    addToCart({
      product: {
        price: product.price,
        title: product.name,
        id: product._id,
        src: product.prodImg,
      },
      quantity: quantity,
      addons: addonQuantity,
      softDrinks: softDrinkQuantity,
      prod_id: product._id,
    });
  };

  // handle when someone clicks on plus or minus
  const handleQuantity = condition => {
    if (condition === '+') {
      setQuantity(quantity + 1);
    } else {
      return quantity === 1 ? true : setQuantity(quantity - 1);
    }
  };

  // get all softdrinks
  const getAllSoftDrinks = async () => {
    try {
      const {data} = await axios.get(getSoftDrinks);
      setSoftDrinks(data);
    } catch (error) {
      Toast.error('Something Went Wrong. Please Try Again!');
    }
  };

  // get all addons
  const getAllAddons = async () => {
    try {
      const {data} = await axios.get(getAddons);
      setAddons(data);
      setLoading(false);
    } catch (error) {
      Toast.error('Something Went Wrong. Please Try Again!');
    }
  };

  // get the info of incoming product with "id"
  const getProdInfo = async id => {
    try {
      const {data} = await axios.get(getProductInfo + '/' + id);
      setProduct(data);
      getAllSoftDrinks();
      getAllAddons();
    } catch (error) {
      Toast.error('Error! Please Check Your Internet Connection.');
    }
  };

  // check if already exists, if yes than show "Go To Cart" Button Instead Of "Add To Cart"
  const checkExists = id => {
    const filter = cartItems.filter(item => {
      return item.prod_id === id;
    });
    if (filter.length > 0) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  };

  useEffect(() => {
    getProdInfo(route.params.prodId);
    setSoftDrinkQuantity([]);
    setAddonQuantity([]);
  }, []);

  useEffect(() => {
    checkExists(route.params.prodId);
  }, [cartItems]);

  return (
    <>
      <View>
        <Container
          duration={2000}
          width={Dimensions.get('window').width - 80}
          height={100}
          position="top"
        />
      </View>
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
              <Image style={styles.img} source={{uri: product.prodImg}} />
            </View>
            <View style={styles.inner}>
              <View style={styles.row}>
                <Text
                  adjustsFontSizeToFit
                  numberOfLines={1}
                  style={styles.text}>
                  {product.name}
                </Text>
                <Text
                  adjustsFontSizeToFit
                  numberOfLines={1}
                  style={styles.text}>
                  PKR {product.price}
                </Text>
              </View>
              <View>
                <Text style={styles.desc}>{product.desc}</Text>
              </View>
              <View style={{marginTop: 20}}>
                <DrinkAccordion softDrinks={softDrinks} />
                <AddonAccordion addons={addons} />
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
            {isInCart === true ? (
              <Pressable
                style={styles.addToCart}
                onPress={() => navigation.navigate('bucket')}>
                <Text style={styles.addToCartText}>Go To Bucket</Text>
              </Pressable>
            ) : (
              <Pressable
                style={styles.addToCart}
                onPress={() => addProdToCart()}>
                <Text style={styles.addToCartText}>Add To Bucket</Text>
              </Pressable>
            )}
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
    height: Dimensions.get('window').height / 2.5,
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
  desc: {
    fontFamily: 'Poppins-Medium',
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
