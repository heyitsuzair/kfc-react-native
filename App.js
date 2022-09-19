/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AuthState from './context/auth/AuthState';
import MainNav from './navigation/index';

const App = () => {
  return (
    <AuthState>
      <MainNav />
    </AuthState>
  );
};

export default App;
