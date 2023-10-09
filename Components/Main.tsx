import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './BottomTab/MainScreen';
import NotifyScreen from './Stack_Screens/NotifyScreen';
import ProductDetails from './Stack_Screens/ProductDetails';
import Snack from './Stack_Screens/CategorySnack';
import Food from './Stack_Screens/CategoryFood';
import Drink from './Stack_Screens/CategoryDrink';
import Dessert from './Stack_Screens/CategoryDessert';
import CheckoutScreen from './Stack_Screens/CheckoutScreen';
import PaymentScreen from './Stack_Screens/PaymentScreen';

const Stack = createNativeStackNavigator();

const MainProfile = () => {
  return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='MainScreen' component={MainScreen} />
                <Stack.Screen name='NotifyScreen' component={NotifyScreen} />
                <Stack.Screen name='Checkout' component={CheckoutScreen} />
                <Stack.Screen name='Details' component={ProductDetails} />
                <Stack.Screen name='Payment' component={PaymentScreen} />
                <Stack.Screen name='Snack' component={Snack} />
                <Stack.Screen name='Food' component={Food} />
                <Stack.Screen name='Drink' component={Drink} />
                <Stack.Screen name='Dessert' component={Dessert} />
            </Stack.Navigator>
        </NavigationContainer>
  )
}

export default MainProfile