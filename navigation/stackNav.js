import React, {useContext} from 'react';
import Auth from '../views/Auth';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import TabNav from './tabNav';
import authContext from '../context/auth/AuthContext';
import SingleProduct from '../views/SingleProduct';

export default function stackNav() {
  // check the user state
  const {user} = useContext(authContext);

  // check if user is null than show auth screen else show tabs and other screens
  return (
    <Stack.Navigator
      initialRouteName="auth"
      screenOptions={{headerShown: false}}>
      {user === null ? (
        <Stack.Screen name="auth" component={Auth} />
      ) : (
        <>
          <Stack.Screen name="tabs" component={TabNav} />
          <Stack.Screen name="singleProduct" component={SingleProduct} />
        </>
      )}
    </Stack.Navigator>
  );
}
