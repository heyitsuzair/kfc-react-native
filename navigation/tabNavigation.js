import React, {useContext} from 'react';
import Auth from '../views/Auth';
import Home from '../views/Home';
import Menu from '../views/Menu';
import Bucket from '../views/Bucket';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import authContext from '../context/auth/AuthContext';
const Tab = createMaterialBottomTabNavigator();
import Logout from '../views/Logout';

export default function index() {
  // user state to check if user is logged in or not
  const {user} = useContext(authContext);

  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{
          backgroundColor: 'white',
        }}
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
          children={props => <Home {...props} />}
        />

        <Tab.Screen
          name="menu"
          options={{
            tabBarLabel: 'Menu',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="food" color={color} size={26} />
            ),
          }}
          children={props => <Menu {...props} />}
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
          children={props => <Bucket {...props} />}
        />
        {user === null ? (
          <Tab.Screen
            name="auth"
            options={{
              tabBarLabel: 'Login',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="login" color={color} size={26} />
              ),
            }}
            children={props => <Auth {...props} />}
          />
        ) : (
          <Tab.Screen
            name="logout"
            options={{
              tabBarLabel: 'Logout',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="logout" color={color} size={26} />
              ),
            }}
            children={props => <Logout {...props} />}
          />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
