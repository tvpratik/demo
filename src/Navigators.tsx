/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from 'react';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import {NavigationContainer} from '@react-navigation/native';
import {Login, Demo} from './Screens';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Navigators(): JSX.Element {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Demo" component={Demo} />
      </Stack.Navigator> */}
      <Tab.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          options={({route, navigation}) => {
            return {
              tabBarIcon: ({color, focused}) => (
                <Icon name="compass" size={25} color={color} />
              ),
            };
          }}
          name="Login"
          component={Login}
        />
        <Tab.Screen
          options={({route, navigation}) => {
            return {
              tabBarIcon: ({color, focused}) => (
                <Icon
                  name="map"
                  size={25}
                  color={color}
                  style={{transform: [{rotate: '90deg'}]}}
                />
              ),
            };
          }}
          name="Demo"
          component={Demo}
        />
        <Tab.Screen
          options={({route, navigation}) => {
            return {
              tabBarIcon: ({color, focused}) => (
                <Icon name="plus" size={25} color={color} />
              ),
            };
          }}
          name="plus"
          component={Demo}
        />
        <Tab.Screen
          options={({route, navigation}) => {
            return {
              tabBarIcon: ({color, focused}) => (
                <Icon name="message-circle" size={25} color={color} />
              ),
            };
          }}
          name="message"
          component={Demo}
        />
        <Tab.Screen
          options={({route, navigation}) => {
            return {
              tabBarIcon: ({color, focused}) => (
                <Icon name="user" size={25} color={color} />
              ),
            };
          }}
          name="user"
          component={Demo}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Navigators;
