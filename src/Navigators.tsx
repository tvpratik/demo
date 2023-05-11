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
  InputRef,
  FlatListScroll,
  CountryCodePicker,
  Home,
  CoffeeAutonomous,
  DemoAPI,
  users,
  Register,
  GoogleLogin,
  FBLogin,
} from './Screens';
const Stack = createStackNavigator();

function Navigators(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GoogleLogin"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="GoogleLogin" component={GoogleLogin} />
        <Stack.Screen name="FBLogin" component={FBLogin} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Demo" component={Demo} />
        <Stack.Screen name="BlinkApp" component={BlinkApp} />
        <Stack.Screen name="LotsOfGreetings" component={LotsOfGreetings} />
        <Stack.Screen name="Example" component={Example} />
        <Stack.Screen name="ClassComponent" component={ClassComponent} />
        <Stack.Screen name="Input" component={InputRef} />
        <Stack.Screen name="FlatListScroll" component={FlatListScroll} />
        <Stack.Screen name="CountryCodePicker" component={CountryCodePicker} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CoffeeAutonomous" component={CoffeeAutonomous} />
        <Stack.Screen name="DemoAPI" component={DemoAPI} />
        <Stack.Screen name="users" component={users} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigators;
