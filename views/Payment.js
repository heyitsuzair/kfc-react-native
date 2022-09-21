import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Dimensions,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import authContext from '../context/auth/AuthContext';
import TextInput from '../components/TextInput';
import colors from '../colors';
import Radio from '../components/Radio';
import {Toast} from 'toastify-react-native';
import Container from 'toastify-react-native';

export default function Payment({navigation}) {
  // get user info
  const {user, location, phoneNo} = useContext(authContext);

  // state for selected payment option
  const [selectedPayment, setSelectedPayment] = useState({
    index: 1,
    value: 'COD',
  });

  // state to check whether order is placed or not
  const [isPlaced, setIsPlaced] = useState(false);

  // handle when someone clicks on "place order"
  const handlePlaceOrder = () => {
    Toast.success('Order Placed!');
    setIsPlaced(true);
  };

  // handle when someone presses radio
  const handleRadioPress = (index, value) => {
    setSelectedPayment({index, value});
  };

  useEffect(() => {
    // setting the custom title of header
    navigation.setOptions({
      title: 'PKR 600',
      headerShown: isPlaced === true ? false : true,
    });
    // check if order is placed, if true than prevent it from going back
    if (isPlaced === true) {
      navigation.addListener('beforeRemove', e => {
        e.preventDefault();
      });
    }
  }, [isPlaced]);

  return (
    <>
      <View>
        <Container
          duration={2000}
          width={Dimensions.get('window').width - 100}
          height={100}
          position="top"
        />
      </View>
      {isPlaced === true ? (
        <View style={styles.thankYou}>
          <Text
            style={styles.thankYouText}
            adjustsFontSizeToFit
            numberOfLines={1}>
            Thank You! Your Order Will Be Delivered Soon To Your Selected
            Address.
          </Text>
          <Pressable
            onPress={() => {
              navigation.navigate('home');
            }}
            style={styles.pressable}>
            <Text style={styles.fixedBarBtn}>Back To Home</Text>
          </Pressable>
        </View>
      ) : (
        <>
          <ScrollView style={styles.parent}>
            <TextInput
              label="Email Address"
              editable={false}
              value={user.email}
              onChangeText={false}
            />
            <TextInput
              label="Full Name"
              editable={false}
              value={user.name}
              onChangeText={false}
            />
            <TextInput
              label="Selected Area"
              editable={false}
              value={location}
              onChangeText={false}
            />
            <TextInput
              label="Phone No."
              editable={false}
              value={phoneNo}
              onChangeText={false}
            />
            <View>
              <Text style={styles.poppins}>Payment Option</Text>
              <View>
                <Radio
                  handlePress={handleRadioPress}
                  index={1}
                  selectedPayment={selectedPayment.index}
                  value="COD"
                  label="Cash On Delivery"
                />
                <Radio
                  handlePress={handleRadioPress}
                  index={2}
                  selectedPayment={selectedPayment.index}
                  value="CCD"
                  label="Credit Card On Delivery"
                />
              </View>
            </View>
          </ScrollView>
          <View style={styles.fixedBar}>
            <Pressable
              onPress={() => handlePlaceOrder()}
              style={styles.pressable}>
              <Text style={styles.fixedBarBtn}>PLACE ORDER</Text>
            </Pressable>
          </View>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  parent: {
    padding: 10,
    backgroundColor: 'white',
  },
  fixedBar: {
    backgroundColor: 'white',
    borderTopColor: colors.bg,
    borderTopWidth: 3,
  },
  pressable: {
    backgroundColor: colors.primary,
    padding: 15,
    margin: 10,
    borderRadius: 5,
  },
  fixedBarBtn: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
  poppins: {
    fontFamily: 'Poppins-Medium',
  },
  thankYou: {
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thankYouText: {
    fontFamily: 'Poppins-Medium',
  },
});
