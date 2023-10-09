import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../ProfileScreen';
import NotifyScreen from '../Stack_Screens/NotifyScreen';

const Stack = createNativeStackNavigator();

const MainProfile = () => {
  return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
            <Stack.Screen name='NotifyScreen' component={NotifyScreen} />
        </Stack.Navigator>
  )
}

export default MainProfile