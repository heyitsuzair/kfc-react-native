import {View, Image, StyleSheet, Dimensions, ScrollView} from 'react-native';
import React from 'react';

export default function Home({navigation}) {
  return (
    <ScrollView>
      <View>
        <Image
          source={require('../assets/images/deal1.png')}
          style={styles.img}
        />
        <View style={styles.cards}>
          <Image
            style={styles.cardImg}
            source={require('../assets/images/deal1.png')}
          />
          <Image
            style={styles.cardImg}
            source={require('../assets/images/deal1.png')}
          />
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
    height: Dimensions.get('window').height / 5,
  },
});
