import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {GOOGLE_MAPS_API} from '@env';
import authContext from '../context/auth/AuthContext';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Toast} from 'toastify-react-native';
navigator.geolocation = require('react-native-geolocation-service');

export default function SelectArea({navigation}) {
  // use the following context to get city
  const {city, setLocation} = useContext(authContext);

  useEffect(() => {
    // set the custom title of header
    navigation.setOptions({
      title: 'Select Your Area',
    });
  }, []);

  return (
    <View style={styles.parent}>
      <GooglePlacesAutocomplete
        placeholder="Search Your Term"
        enableHighAccuracyLocation={true}
        onFail={() =>
          Toast.error('Please Check Your Interner Connection And Try Again!')
        }
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          setLocation(data.name || data.description + ',' + city.name);
          navigation.navigate('Location');
        }}
        query={{
          key: GOOGLE_MAPS_API,
          language: 'en',
          rankby: 'distance',
        }}
        currentLocation={true}
        currentLocationLabel="Choose Current location"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
  },
});
