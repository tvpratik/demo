/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React from 'react';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';

import {
  Login,
  Demo,
  BlinkApp,
  LotsOfGreetings,
  Example,
  ClassComponent,
} from './Screens';

const Stack = createStackNavigator();

function Navigators(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Example"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Demo" component={Demo} />
        <Stack.Screen name="BlinkApp" component={BlinkApp} />
        <Stack.Screen name="LotsOfGreetings" component={LotsOfGreetings} />
        <Stack.Screen name="Example" component={Example} />
        <Stack.Screen name="ClassComponent" component={ClassComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigators;
