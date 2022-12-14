import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useEffect} from 'react';
import Container from 'toastify-react-native';

export default function Home({navigation}) {
  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      e.preventDefault();
    });
    //eslint-disable-next-line
  }, []);

  return (
    <ScrollView>
      <View>
        <Container
          duration={2000}
          width={Dimensions.get('window').width - 100}
          height={70}
          position="top"
        />
      </View>
      <View>
        <Pressable
          onPress={() => navigation.navigate('tabs', {screen: 'menu'})}>
          <Image
            source={require('../assets/images/deal1.png')}
            style={styles.img}
          />
        </Pressable>
        <View style={styles.cards}>
          <Pressable
            onPress={() =>
              navigation.navigate('singleProduct', {
                prodId: '630cc24ce5464563995c6ac9',
              })
            }>
            <Image
              style={styles.cardImg}
              source={{
                uri: 'https://res.cloudinary.com/digaxe3sc/image/upload/v1661780556/kfc-clone/rv4bfp4lrpfjgcefn28q.png',
              }}
            />
          </Pressable>
          <Pressable
            onPress={() =>
              navigation.navigate('singleProduct', {
                prodId: '630cc390e5464563995c6ae4',
              })
            }>
            <Image
              style={styles.cardImg}
              source={{
                uri: 'https://res.cloudinary.com/digaxe3sc/image/upload/v1661780880/kfc-clone/pu7y50x9rdmldwnwfhsq.png',
              }}
            />
          </Pressable>
        </View>
        <View style={styles.cards}>
          <Pressable
            onPress={() =>
              navigation.navigate('singleProduct', {
                prodId: '630cc53fe5464563995c6b77',
              })
            }>
            <Image
              style={styles.cardImg}
              source={{
                uri: 'https://res.cloudinary.com/digaxe3sc/image/upload/v1661781310/kfc-clone/valecu3rml42ehnc2vsz.png',
              }}
            />
          </Pressable>
          <Pressable
            onPress={() =>
              navigation.navigate('singleProduct', {
                prodId: '630cbe5ce5464563995c6a42',
              })
            }>
            <Image
              style={styles.cardImg}
              source={{
                uri: 'https://res.cloudinary.com/digaxe3sc/image/upload/v1661779548/kfc-clone/cxj9ryo4kpgojhezfn9a.png',
              }}
            />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: Dimensions.get('window').width,
    resizeMode: 'cover',
  },
  cards: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  cardImg: {
    width: Dimensions.get('window').width / 2.2,
    resizeMode: 'contain',
    marginBottom: 10,
    height: Dimensions.get('window').height / 3,
  },
});
