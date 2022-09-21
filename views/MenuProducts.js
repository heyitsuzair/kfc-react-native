import {StyleSheet, ScrollView, View, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../components/Cards/Product';
import {Toast} from 'toastify-react-native';
import Container from 'toastify-react-native';
import axios from 'axios';
import {getCatProducts} from '../utils/apis';
import Loading from '../components/Loading';

export default function MenuProducts({route, navigation}) {
  // state for category products
  const [products, setProducts] = useState(null);

  // state for loading
  const [loading, setLoading] = useState(true);

  const checkIfMidnight = () => {
    if (route.params.title === 'Midnight') {
      const getHour = new Date().getHours();
      if (getHour > 2) {
        navigation.goBack();
        Toast.warn('Available From 12AM To 2AM Only!');
      } else {
        getCategoryProducts();
      }
    } else {
      getCategoryProducts();
      return;
    }
  };

  const getCategoryProducts = async () => {
    try {
      const {data} = await axios.get(getCatProducts + '/' + route.params.title);
      setProducts(data.getCatProducts);
      setLoading(false);
    } catch (error) {
      console.warn(error);
      Toast.error('Error! Please Check Your Internet Connection!');
    }
  };

  useEffect(() => {
    // changing header title according to the title incoming
    navigation.setOptions({
      title: route.params.title,
    });
    checkIfMidnight();
    //eslint-disable-next-line
  }, []);

  // handle when someone clicks on card
  const handleOnPress = prodId => {
    navigation.navigate('singleProduct', {
      prodId: prodId,
    });
  };

  return (
    <>
      <Container
        duration={2000}
        width={Dimensions.get('window').width - 80}
        height={100}
        position="top"
      />
      {loading === true ? (
        <Loading />
      ) : (
        <ScrollView>
          <View style={styles.parent}>
            {products.map((prod, index) => {
              return (
                <Card key={index} prod={prod} handleOnPress={handleOnPress} />
              );
            })}
          </View>
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  parent: {
    margin: 10,
  },
});
