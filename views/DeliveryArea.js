import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import React, {useContext, useEffect} from 'react';

import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../colors';
import {IQ_LOCATION_API} from '@env';
import axios from 'axios';
import authContext from '../context/auth/AuthContext';

export default function DeliveryArea({navigation}) {
  const {city, setCity} = useContext(authContext);

  const getCity = async (latitude, longitude) => {
    try {
      const url =
        ' https://us1.locationiq.com/v1/reverse.php?key=' +
        IQ_LOCATION_API +
        '&lat=' +
        latitude +
        '&lon=' +
        longitude +
        '&format=json';
      await axios.get(url).then(res => {
        const city = res.data.address.city;
        setCity(city);
      });
    } catch (error) {
      console.warn(error);
      // show the warning
      // console.warn('Something Went Wrong');
    }
  };

  const getLocation = () => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      )
        .then(res => {
          // if location permession is granted run the following code
          if (res === 'granted') {
            Geolocation.getCurrentPosition(data => {
              getCity(data.coords.latitude, data.coords.longitude);
            });
          } else if (res === 'denied') {
            // if location permession is denied run the following code
            getLocation();
          }
        })
        .catch(res => {
          console.warn('Something Went Wrong! Please Try Again!');
        });
    } else {
      Geolocation.getCurrentPosition(data => {
        getCity(data.coords.latitude, data.coords.longitude);
      });
    }
  };

  useEffect(() => {
    getLocation();
    //eslint-disable-next-line
  }, []);

  return (
    <View style={styles.parent}>
      <Icon name="location-pin" size={200} color={colors.primary} />
      <Text style={styles.title}>KFC</Text>
      <Text style={styles.findOutlet}>Lets Find An Outlet Near You</Text>
      <Pressable
        style={styles.row}
        onPress={() => navigation.navigate('selectCity')}>
        <Text style={styles.city}>
          {city === null ? 'Please Select City' : city}
        </Text>
        <FontAwesome name="caret-down" />
      </Pressable>
      <Pressable style={styles.row}>
        <Text style={styles.city}>Area</Text>
        <FontAwesome name="caret-down" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 70,
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
  },
  findOutlet: {
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 40,
  },
  row: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width / 3.5,
  },
  city: {
    fontFamily: 'Poppins-Medium',
  },
});
