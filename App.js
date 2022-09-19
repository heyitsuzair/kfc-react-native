/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import colors from './colors';
import AuthState from './context/auth/AuthState';
import MainNav from './navigation/index';

const App = () => {
  return (
    <AuthState>
      <StatusBar backgroundColor={colors.primary} />
      <MainNav />
    </AuthState>
  );
};

export default App;
