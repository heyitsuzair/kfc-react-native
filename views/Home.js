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
          height={100}
          position="top"
        />
      </View>
      <View>
        <Image
          source={require('../assets/images/deal1.png')}
          style={styles.img}
        />
        <View style={styles.cards}>
          <Pressable onPress={() => navigation.navigate('singleProduct')}>
            <Image
              style={styles.cardImg}
              source={require('../assets/images/deal1.png')}
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('singleProduct')}>
            <Image
              style={styles.cardImg}
              source={require('../assets/images/deal1.png')}
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
