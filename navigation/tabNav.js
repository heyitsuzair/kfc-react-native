import React from 'react';
import Home from '../views/Home';
import Menu from '../views/Menu';
import Bucket from '../views/Bucket';
import Logout from '../views/Logout';
import colors from '../colors';
const Tab = createMaterialBottomTabNavigator();

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Tabs() {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: 'white',
      }}
      activeColor={colors.primary}
      shifting={false}>
      <Tab.Screen
        name="home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        component={Home}
      />

      <Tab.Screen
        name="menu"
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="food" color={color} size={26} />
          ),
        }}
        component={Menu}
      />
      <Tab.Screen
        name="bucket"
        options={{
          tabBarLabel: 'Bucket',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="bucket-outline"
              color={color}
              size={26}
            />
          ),
        }}
        component={Bucket}
      />

      <Tab.Screen
        name="logout"
        options={{
          tabBarLabel: 'Logout',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="logout" color={color} size={26} />
          ),
        }}
        component={Logout}
      />
    </Tab.Navigator>
  );
}
