import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import MakeReservation from '../screens/MakeReservation';

const HomeStack = StackNavigator({
  Home: {
    screen: Home,
  },
  MakeReservation: {
    screen: MakeReservation,
  },
}, {
  navigationOptions: {
    gesturesEnabled: false,
    headerVisible: false,
  },
  mode: 'modal',
  headerMode: 'none',
  initialRouteName: 'Home',
});

const Root = StackNavigator(
  {
    Home: {
      screen: HomeStack,
    },
  },
  {
    navigationOptions: {
      gesturesEnabled: false,
      headerVisible: false,
    },
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

export default Root;
