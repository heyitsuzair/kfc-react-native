import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function SingleProduct({navigation}) {
  // when someone presses cross
  const handleOnPress = () => {
    // navigate the person back to the screen from where it came
    navigation.goBack();
  };

  return (
    <View style={styles.parent}>
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
    </View>
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
    resizeMode: 'cover',
  },
});
