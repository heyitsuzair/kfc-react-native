import {View, Image, StyleSheet, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import Button from '../components/Button/Button';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {GOOGLE_CLIENT_ID} from '@env';

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  webClientId: GOOGLE_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  iosClientId: GOOGLE_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});

export default function Auth() {
  //state for sign in user
  const [user, setUser] = useState(null);

  const login = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo);
      console.warn(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.warn('in prog');
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        alert('Play Services Are Not Available Or Outdated!');
      } else {
        console.warn(error);
        // some other error happened
      }
    }
  };

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
