import 'react-native-gesture-handler';

import React, {useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../HomeScreen';
import FavScreen from '../FavScreen';
import CartScreen from '../CartScreen';
import ProfileScreen from '../ProfileScreen';

import BottomTabBar from './BottomTabBar';
import Icon from '../Custom/Icons';

const BottomTabArray = [
  {
    route: 'Home',
    label: 'Home',
    type: 'Entypo',
    activeIcon: 'home',
    inactiveIcon: 'home',
    component: HomeScreen,
  },
  {
    route: 'Fav',
    label: 'Fav',
    type: 'Ionicons',
    activeIcon: 'ios-heart',
    inactiveIcon: 'ios-heart',
    component: FavScreen,
  },
  {
    route: 'Cart',
    label: 'Cart',
    type: 'MaterialCommunityIcons',
    activeIcon: 'cart',
    inactiveIcon: 'cart',
    component: CartScreen,
  },
  {
    route: 'Profile',
    label: 'Profile',
    type: 'FontAwesome',
    activeIcon: 'user',
    inactiveIcon: 'user',
    component: ProfileScreen,
  },
];

const MainScreen = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  // const Tab = createMaterialBottomTabNavigator();

  return (

      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {flex: 0.09},
        }}>
        {BottomTabArray.map((item, index) => {
          return (
            <Tab.Screen
              key={index}
              name={item.route}
              component={item.component}
              options={{
                tabBarIcon({color, focused}): any {
                  return (
                    <Icon
                      type={item.type}
                      color={color}
                      name={focused ? item.activeIcon : item.inactiveIcon}
                      size={24}
                    />
                  );
                },
                tabBarButton(props) {
                  return <BottomTabBar {...props} item={item} />;
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
