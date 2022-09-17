import {View, Image, StyleSheet, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import Button from '../components/Button/Button';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {GOOGLE_CLIENT_ID} from '@env';

export default function Auth() {
  //state for sign in user
  const [user, setUser] = useState(null);

  // when someone touches login with google
  const login = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const userInfo = await GoogleSignin.signIn();
      // setting user info in state
      setUser(userInfo.user);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        alert('Play Services Are Not Available Or Outdated!');
      } else {
        console.warn('Something Went Wrong Please Try Again!');
        // some other error happened
      }
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      androidClientId: GOOGLE_CLIENT_ID,
      iosClientId: GOOGLE_CLIENT_ID,
    });
    //eslint-disable-next-line
  }, []);

  return (
    <View>
      <View style={styles.parent}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.login}>
        <Button
          width="full"
          text={'Login With Google'}
          action={login}
          color="primary"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f0f2f5',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 200,
  },
  login: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
