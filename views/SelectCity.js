import {View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {Searchbar} from 'react-native-paper';
import colors from '../colors';
import authContext from '../context/auth/AuthContext';

export default function SelectCity({navigation}) {
  // value of search bar
  const [value, setValue] = useState('');

  // to change city use the following context
  const {setCity} = useContext(authContext);

  // All cities of pakistan
  const [allCities, setAllCities] = useState([
    {name: 'Abbottabad'},
    {name: 'Bahawalpur'},
    {name: 'Islamabad'},
    {name: 'Karachi'},
    {name: 'Peshawar'},
    {name: 'Lahore'},
    {name: 'Jhelum'},
    {name: 'Hyderabad'},
    {name: 'Gujranwala'},
    {name: 'Larkana'},
    {name: 'Multan'},
    {name: 'Okara'},
    {name: 'Rawalpindi'},
    {name: 'Sialkot'},
    {name: 'Sukkur'},
    {name: 'Sargodha'},
    {name: 'Rahim Yar Khan'},
  ]);

  // handle on change search value
  const onChangeSearch = query => {
    if (query === '') {
      // setting "allCities" back to its initial state
      setAllCities([
        {name: 'Abbottabad'},
        {name: 'Bahawalpur'},
        {name: 'Islamabad'},
        {name: 'Karachi'},
        {name: 'Peshawar'},
        {name: 'Lahore'},
        {name: 'Jhelum'},
        {name: 'Hyderabad'},
        {name: 'Gujranwala'},
        {name: 'Larkana'},
        {name: 'Multan'},
        {name: 'Okara'},
        {name: 'Rawalpindi'},
        {name: 'Sialkot'},
        {name: 'Sukkur'},
        {name: 'Sargodha'},
        {name: 'Rahim Yar Khan'},
      ]);
      setValue('');
    } else {
      setValue(query);

      //  filter cities according to the characters coming
      const filteredCities = allCities.filter(city => {
        return city.name
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase());
      });
      // check if array doesnot find any object return the function instead of setting "allCities" to empty
      if (filteredCities.length < 1) {
        return;
      }
      // setting the found cities to state
      setAllCities(filteredCities);
    }
  };

  useEffect(() => {
    // change the header title
    navigation.setOptions({
      title: 'Select Your City',
    });
  }, []);

  return (
    <>
      <Searchbar
        placeholder="Enter Your Search Term"
        style={styles.search}
        onChangeText={onChangeSearch}
        value={value}
      />
      <ScrollView style={styles.parent}>
        {allCities.map((city, index) => {
          return (
            <Pressable
              key={index}
              onPress={() => {
                setCity({name: city.name, lon: 74.3587, lat: 31.5204});
                navigation.goBack();
              }}>
              <Text style={styles.text}>{city.name}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  parent: {
    padding: 10,
  },
  search: {
    margin: 10,
  },
  text: {
    backgroundColor: 'white',
    padding: 20,
    borderBottomColor: colors.bg,
    borderBottomWidth: 3,
  },
});
