import React from 'react';
import Navigators from './src/Navigators';
import 'react-native-gesture-handler';
// import DrawerNavigator from './src/DrawerNavigator';
// import BottomTabNavigator from './src/BottomTabNavigator';

function App(): JSX.Element {
  // return <BottomTabNavigator />;
  // return <DrawerNavigator />;
  return <Navigators />;
}

export default App;
