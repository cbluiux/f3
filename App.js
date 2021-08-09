import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './src/screens/SearchScreen';
import RestaurantDetail from './src/screens/RestaurantDetail';

const Navigator = createStackNavigator(
  { Search: SearchScreen, Detail: RestaurantDetail },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: { title: 'Frugal Food Finder' },
  }
);

const styles = StyleSheet.create({});

export default createAppContainer(Navigator);
