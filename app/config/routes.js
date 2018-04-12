import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';

import { Button, Icon } from 'native-base';

import Home from '../screens/Home';
import AboutUs from '../screens/AboutUs';
import ManageReservations from '../screens/ManageReservations';
import ContactUs from '../screens/ContactUs';
import CallAnUber from '../screens/CallAnUber';
import ViewMenuItem from '../screens/ViewMenuItem';
import MakeReservation from '../screens/MakeReservation';
import SelectSeafood from '../screens/SelectSeafood';
import SelectSauce from '../screens/SelectSauce';
import ReservationSummary from '../screens/ReservationSummary';
import ReservationConfirmation from '../screens/ReservationConfirmation';

import DrawerContainer from '../components/DrawerContainer/DrawerContainer';

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0,
  },
});


const MakeReservationStack = StackNavigator(
  {
    MakeReservation: {
      screen: MakeReservation,
    },
    SelectSeafood: {
      screen: SelectSeafood,
    },
    SelectSauce: {
      screen: SelectSauce,
    },
    ReservationSummary: {
      screen: ReservationSummary,
    },
    ReservationConfirmation: {
      screen: ReservationConfirmation,
    },
  },
  {
    navigationOptions: {
      gesturesEnabled: false,
      drawerLockMode: 'locked-closed',
    },
    intialRouteName: 'MakeReservation',
    mode: 'card',
  },
);

const DrawerStack = DrawerNavigator({
  Home: {
    screen: Home,
  },
  AboutUs: {
    screen: AboutUs,
  },
  MakeReservation: {
    screen: MakeReservationStack,
  },
  CallAnUber: {
    screen: CallAnUber,
  },
}, {
  navigationOptions: {
    gesturesEnabled: false,
    drawerLockMode: 'locked-closed',
  },
  initialRouteName: 'Home',
  headerMode: 'none',
  mode: 'modal',
});

const ViewMenuItemStack = StackNavigator(
  {
    ViewMenuItem: {
      screen: ViewMenuItem,
    },
  },
  {
    headerMode: 'none',
    mode: 'modal',
  },
);

const Root = StackNavigator(
  {
    DrawerStack: {
      screen: DrawerStack,
    },
    ViewMenuItem: {
      screen: ViewMenuItemStack,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.data.title,
        headerLeft: (
          <Button
            transparent
            onPress={() => navigation.goBack(null)}
            title="back"
          ><Icon name="md-close" />
          </Button>
        ),
      }),
    },
  },
  {
    navigationOptions: {
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'white',
      },
      headerStyle: {
        backgroundColor: 'black',
        borderBottomColor: '#ffffff',
        borderBottom: 'none',
      },
      gesturesEnabled: true,
    },
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: 'DrawerStack',
    // transitionConfig: noTransitionConfig,
  },
);

export default Root;
