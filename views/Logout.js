import React, {useContext, useEffect} from 'react';
import authContext from '../context/auth/AuthContext';
import Toast from 'toastify-react-native';

export default function Logout({navigation}) {
  const {setUser} = useContext(authContext);

  useEffect(() => {
    setUser(null);
    navigation.navigate('home');
    Toast.success('Logged Out!');
    // eslint-disable-next-line
  }, []);
}
