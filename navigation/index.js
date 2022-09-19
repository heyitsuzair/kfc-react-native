import React from 'react';
import StackNav from './stackNav';
import {NavigationContainer} from '@react-navigation/native';

export default function mainNav() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}
