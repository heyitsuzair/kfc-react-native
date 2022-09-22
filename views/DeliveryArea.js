import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../colors';
import {IQ_LOCATION_API} from '@env';
import axios from 'axios';
import authContext from '../context/auth/AuthContext';
import {Toast} from 'toastify-react-native';
import {ActivityIndicator} from 'react-native-paper';

export default function DeliveryArea({navigation}) {
  // following context to set the city in "getCity" function and get the current values
  const {city, setCity, location} = useContext(authContext);

  // loading state
  const [loading, setLoading] = useState(true);

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
        setCity({name: city, lon: longitude, lat: latitude});
        setLoading(false);
      });
    } catch (error) {
      // show the warning
      Toast.warn('Something Went Wrong.Please Check Your Internet Connection!');
    }
  };

  const getLocation = () => {
    // check if city is null than get the user location else it means it is selected from "Select City View" and there is no need to execute this function as user selected custom city
    if (city.name === null) {
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
            Toast.warn('Something Went Wrong! Please Try Again!');
          });
      } else {
        Geolocation.getCurrentPosition(data => {
          getCity(data.coords.latitude, data.coords.longitude);
        });
      }
    } else {
      setLoading(false);
      return;
    }
  };

  useEffect(() => {
    getLocation();
    //eslint-disable-next-line
  }, []);

  return (
    <View style={styles.parent}>
      {loading === true ? (
        <ActivityIndicator
          size="large"
          animating={true}
          color={colors.primary}
        />
      ) : (
        <>
          <Icon name="location-pin" size={200} color={colors.primary} />
          <Text style={styles.title}>KFC</Text>
          <Text style={styles.findOutlet}>Lets Find An Outlet Near You</Text>
          <Pressable
            style={styles.row}
            onPress={() => navigation.navigate('selectCity')}>
            <Text style={styles.city}>
              {city.name === null ? 'Please Select City' : city.name}
            </Text>
            <FontAwesome name="caret-down" />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('selectArea')}
            style={styles.row}>
            <Text style={styles.city}>
              {location === null ? 'Area' : location.slice(0, 15) + '...'}
            </Text>
            <FontAwesome name="caret-down" />
          </Pressable>
        </>
      )}
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
