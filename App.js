/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AuthState from './context/auth/AuthState';
import Navigation from './navigation/tabNavigation';

const App = () => {
  return (
    <AuthState>
      <Navigation />
    </AuthState>
  );
};

export default App;
