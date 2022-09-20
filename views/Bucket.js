import {
  View,
  Text,
  ScrollView,
  Button,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../colors';

export default function Bucket({navigation}) {
  return (
    <View>
      <View style={styles.empty}>
        <MaterialCommunityIcons name="bucket-outline" size={100} />
        <Text style={styles.emptyText}>
          Hungry? Add Something To Your Bucket!!!
        </Text>
        <Pressable
          onPress={() => navigation.navigate('menu')}
          style={styles.emptyPressable}>
          <Text style={styles.pressableText}>START YOUR ORDER</Text>
        </Pressable>
      </View>
      <ScrollView></ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  empty: {
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    margin: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  emptyPressable: {
    backgroundColor: colors.primary,
    padding: 13,
    color: 'white',
    borderRadius: 5,
  },
  pressableText: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
});
