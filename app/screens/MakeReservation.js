import React, { Component } from 'react';
import Proptypes from 'prop-types';
import axios from 'axios';

import { Text, TouchableOpacity, View, Image } from 'react-native';
import { Container, Header, Content, Item, Input, Picker, Button, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import DateTimePicker from 'react-native-modal-datetime-picker';
import EStyleSheet from 'react-native-extended-stylesheet';

import ReservationForm from '../components/ReservationForm/ReservationForm';
import ConfirmReservation from '../components/ReservationButton/ConfirmReservation';
import HeaderContainer from '../components/HeaderContainer/HeaderContainer';

class MakeReservation extends Component {
  static propTypes = {
    navigation: Proptypes.object,
  };

  static navigationOptions = ({ navigation }) => ({
    title: <Text style={{ fontWeight: 'bold' }}>Request Table</Text>,
    headerLeft: (
      <Button transparent onPress={() => navigation.goBack(null)} title="Info">
        <Icon name="md-arrow-round-back" />
      </Button>
    ),
    drawerLabel: <Text style={{ fontWeight: 'bold' }}>Request Table</Text>,
    drawerIcon: () => <Icon name="md-time" />,
  });

  render() {
    return (
      <Container>
        <HeaderContainer title="Reservations" />
        <Content padder>
          <ReservationForm />
        </Content>
      </Container>
    );
  }
}

export default MakeReservation;
