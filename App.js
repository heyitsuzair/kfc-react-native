/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import Auth from './views/Auth';
import AuthState from './context/auth/AuthState';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from './views/Home';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <AuthState>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="auth">
          <Tab.Screen name="auth" component={Auth} />
          <Tab.Screen name="home" component={Home} />
        </Tab.Navigator>
      </NavigationContainer>
    </AuthState>
  );
};

export default App;
