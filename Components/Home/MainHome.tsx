import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../HomeScreen';
import NotifyScreen from '../Stack_Screens/NotifyScreen';

const Stack = createNativeStackNavigator();

const MainProfile = () => {
  return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='NotifyScreen' component={NotifyScreen} />
        </Stack.Navigator>
  )
}

export default MainProfile