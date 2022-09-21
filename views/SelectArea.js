import {View, StyleSheet, Dimensions} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {GOOGLE_MAPS_API} from '@env';
import authContext from '../context/auth/AuthContext';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Toast} from 'toastify-react-native';
import colors from '../colors/index';
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
        styles={{
          textInput: {
            fontSize: 16,
            backgroundColor: 'white',
            margin: 10,
            shadowColor: 'black',
            elevation: 10,
          },
          separator: {
            height: 2,
            backgroundColor: colors.bg,
          },
          predefinedPlacesDescription: {
            color: colors.primary,
            fontFamily: 'Poppins-SemiBold',
          },
        }}
        fetchDetails={true}
        onFail={() =>
          Toast.error('Please Check Your Interner Connection And Try Again!')
        }
        onPress={(data, details = null) => {
          const formattedAddress = details.formatted_address.replace(
            /^[^,]+, */,
            '',
          );
          // 'details' is provided when fetchDetails = true
          setLocation(details.name + ' , ' + formattedAddress);
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
