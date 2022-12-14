import React, {useContext} from 'react';
import Auth from '../views/Auth';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import TabNav from './tabNav';
import authContext from '../context/auth/AuthContext';
import SingleProduct from '../views/SingleProduct';
import MenuProducts from '../views/MenuProducts';
import DeliveryArea from '../views/DeliveryArea';
import Checkout from '../views/Checkout';
import BucketItemInfo from '../views/BucketItemInfo';
import SelectCity from '../views/SelectCity';
import SelectArea from '../views/SelectArea';
import Icon from 'react-native-vector-icons/Entypo';
import colors from '../colors';
import Payment from '../views/Payment';

export default function stackNav() {
  // check the user state
  const {user} = useContext(authContext);

  // check if user is null than show auth screen else show tabs and other screens
  return (
    <Stack.Navigator initialRouteName="auth">
      {user === null ? (
        <Stack.Screen
          options={{headerShown: false}}
          name="auth"
          component={Auth}
        />
      ) : (
        <>
          <Stack.Screen
            name="tabs"
            options={{headerShown: false}}
            component={TabNav}
          />
          <Stack.Screen
            name="singleProduct"
            options={{headerShown: false}}
            component={SingleProduct}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="MenuProducts"
            component={MenuProducts}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="Location"
            component={DeliveryArea}
          />
          <Stack.Screen
            options={({navigation}) => ({
              headerShown: true,
              headerRight: () => (
                <Icon
                  name="location-pin"
                  onPress={() => navigation.navigate('Location')}
                  size={30}
                  color={colors.primary}
                />
              ),
            })}
            name="checkout"
            component={Checkout}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="bucketItemInfo"
            component={BucketItemInfo}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="selectCity"
            component={SelectCity}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="selectArea"
            component={SelectArea}
          />
          <Stack.Screen
            options={({navigation}) => ({
              headerShown: true,
              headerRight: () => (
                <Icon
                  name="location-pin"
                  onPress={() => navigation.navigate('Location')}
                  size={30}
                  color={colors.primary}
                />
              ),
            })}
            name="payment"
            component={Payment}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
