/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {Login, Demo} from './Screens';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function BottomTabNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {height: 60},
        }}>
        <Tab.Screen
          options={() => {
            return {
              tabBarLabel: () => {
                return null;
              },
              tabBarIcon: ({color}) => (
                <Icon name="compass" size={25} color={color} />
              ),
            };
          }}
          name="Login"
          component={Login}
        />
        <Tab.Screen
          options={() => {
            return {
              tabBarLabel: () => {
                return null;
              },
              tabBarIcon: ({color}) => (
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
          options={() => {
            return {
              tabBarLabel: () => {
                return null;
              },
              tabBarIcon: () => (
                <IconAnt name="pluscircle" size={46} color={'#01658C'} />
              ),
            };
          }}
          name="plus"
          component={Demo}
        />
        <Tab.Screen
          options={() => {
            return {
              tabBarLabel: () => {
                return null;
              },
              tabBarIcon: ({color}) => (
                <Icon name="message-circle" size={25} color={color} />
              ),
            };
          }}
          name="message"
          component={Demo}
        />
        <Tab.Screen
          options={() => {
            return {
              tabBarLabel: () => {
                return null;
              },
              tabBarIcon: ({color}) => (
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
export default BottomTabNavigator;
