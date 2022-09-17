import React from 'react';
import Auth from '../views/Auth';
import Home from '../views/Home';
import Menu from '../views/Menu';
import Bucket from '../views/Bucket';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialBottomTabNavigator();
export default function index() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{backgroundColor: 'white'}}
        activeColor="#e4002b"
        shifting={false}
        initialRouteName="home">
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
          name="auth"
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="login" color={color} size={26} />
            ),
          }}
          component={Auth}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
