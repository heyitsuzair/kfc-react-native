import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import TextInput from '../components/TextInput';
import authContext from '../context/auth/AuthContext';
import colors from '../colors';
import {Toast} from 'toastify-react-native';
import Container from 'toastify-react-native';

export default function Checkout({navigation}) {
  // get user info
  const {user, location, phoneNo, setPhoneNo} = useContext(authContext);

  // handle when someone clicks on "continue to payment"
  const handleContinue = () => {
    if (phoneNo === null) {
      Toast.warn('Please Enter Phone No.');
      return;
    } else if (phoneNo.length < 11) {
      Toast.warn('Please Enter Valid 11 Digits Phone No.');
      return;
    } else {
      // navigate to payment page
      navigation.navigate('payment');
    }
  };

  useEffect(() => {
    // Set the custom title of header
    navigation.setOptions({
      title: 'PKR 600',
    });
  }, []);

  return (
    <View style={styles.parent}>
      <View>
        <Container
          duration={2000}
          width={Dimensions.get('window').width - 100}
          height={100}
          position="top"
        />
      </View>
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
        editable={true}
        maxLength={11}
        keyboardType="numeric"
        value={phoneNo === null ? '' : phoneNo}
        onChangeText={setPhoneNo}
      />
      <Pressable onPress={() => handleContinue()} style={styles.pressable}>
        <Text style={styles.fixedBarBtn}>CONTINUE TO PAYMENT</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    padding: 20,
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
  },
  pressable: {
    backgroundColor: colors.primary,
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  fixedBarBtn: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
});
