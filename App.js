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
import AddonState from './context/addon/AddonState';
import CartState from './context/cart/CartState';
import SoftdrinkState from './context/softdrinks/SoftdrinkState';
import MainNav from './navigation/index';

const App = () => {
  return (
    <>
      <AuthState>
        <AddonState>
          <CartState>
            <SoftdrinkState>
              <StatusBar backgroundColor={colors.primary} />
              <MainNav />
            </SoftdrinkState>
          </CartState>
        </AddonState>
      </AuthState>
    </>
  );
};

export default App;
