import React from 'react';
import {Provider} from 'react-redux';
// import {store} from './src/Redux/Store';

import Navigators from './src/Navigators';
import 'react-native-gesture-handler';
import store from './src/Redux/store';
import {enableLatestRenderer} from 'react-native-maps';
enableLatestRenderer();

// import DrawerNavigator from './src/DrawerNavigator';
// import BottomTabNavigator from './src/BottomTabNavigator';

function App(): JSX.Element {
  // return <BottomTabNavigator />;
  // return <DrawerNavigator />;
  return (
    <Provider store={store}>
      <Navigators />
    </Provider>
  );
}

export default App;
