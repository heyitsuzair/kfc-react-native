import {Dimensions, StyleSheet, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import TextInput from '../components/TextInput';
import authContext from '../context/auth/AuthContext';

export default function Checkout({navigation}) {
  // get user info
  const {user, location, city} = useContext(authContext);

  useEffect(() => {
    // Set the custom title of header
    navigation.setOptions({
      title: 'PKR 600',
    });
  }, []);

  return (
    <View style={styles.parent}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    padding: 20,
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
  },
});
