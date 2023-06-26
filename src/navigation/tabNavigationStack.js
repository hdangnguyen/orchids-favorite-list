import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/* icon */
import Icon from 'react-native-vector-icons/Ionicons';
import HomeStack from './homeStack';
import FavoriteStack from './favoriteStack';
import { appColors } from '../utils/appColor';
const NavigationBottom = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: appColors.primary,
        tabBarInactiveTintColor: appColors.inactive,
        tabBarStyle: {
          backgroundColor: appColors.white,
          borderTopWidth: 1,
          borderTopColor: '#EAEAEA',
          elevation: 0,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0,
          shadowRadius: 0,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <Icon name="home-outline" color={color} size={size} />,
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name="FavoritesTab"
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => <Icon name="heart-outline" color={color} size={size} />,
        }}
        component={FavoriteStack}
      />
    </Tab.Navigator>
  );
};

export default NavigationBottom;
