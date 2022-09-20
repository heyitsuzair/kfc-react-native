import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import React from 'react';
import colors from '../colors';
import BucketItem from '../components/Cards/Bucket';

export default function Bucket({navigation}) {
  return (
    <View>
      {/* <View style={styles.empty}>
        <MaterialCommunityIcons name="bucket-outline" size={100} />
        <Text style={styles.emptyText}>
          Hungry? Add Something To Your Bucket!!!
        </Text>
        <Pressable
          onPress={() => navigation.navigate('menu')}
          style={styles.emptyPressable}>
          <Text style={styles.pressableText}>START YOUR ORDER</Text>
        </Pressable>
      </View> */}
      <View style={styles.header}>
        <Text style={styles.header.text}>Your Bucket - 1 ITEM(S)</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        <View>
          <Text style={styles.delivery}>Delivery Fee Of PKR 50 Will Apply</Text>
        </View>
        <View>
          <BucketItem />
          <BucketItem />
          <BucketItem />
          <BucketItem />
          <BucketItem />
          <BucketItem />
          <BucketItem />
          <BucketItem />
          <BucketItem />
          <BucketItem />
          <BucketItem />
          <BucketItem />
          <BucketItem />
          <BucketItem />
        </View>
      </ScrollView>
      <View style={styles.fixedBar}>
        <View>
          <Text style={styles.finish}>Finish It With Something Else</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.fixedBarText}>Total</Text>
          <Text style={styles.fixedBarText}>PKR 3000</Text>
        </View>
        <Pressable
          onPress={() => navigation.navigate('Location')}
          style={styles.pressable}>
          <Text style={styles.fixedBarBtn}>SELECT DELIVERY AREA</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 5,
    shadowColor: 'black',
    elevation: 5,
    text: {
      fontFamily: 'Poppins-Medium',
      fontSize: 20,
      color: 'black',
    },
  },
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
  scrollView: {
    backgroundColor: 'white',
    marginBottom: 70,
  },
  delivery: {
    backgroundColor: colors.bg,
    textAlign: 'center',
  },
  fixedBar: {
    position: 'absolute',
    top: 866,
    backgroundColor: 'white',
    padding: 20,
    width: Dimensions.get('window').width,
    borderTopColor: colors.bg,
    borderTopWidth: 2,
    borderBottomColor: colors.bg,
    borderBottomWidth: 2,
  },
  finish: {
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    paddingBottom: 10,
    borderBottomColor: colors.bg,
    borderBottomWidth: 3,
  },
  row: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  fixedBarText: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
  },
  pressable: {
    backgroundColor: colors.primary,
    padding: 10,
    margin: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  fixedBarBtn: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
});
