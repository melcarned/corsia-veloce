import React, { Component } from 'react';
import { Text, Button, Icon } from 'native-base';

class ManageReservations extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: <Text style={{ fontWeight: 'bold' }}>Reservations</Text>,
    headerLeft: (
      <Button transparent onPress={() => navigation.goBack()} title="Info">
        <Icon name="md-arrow-round-back" />
      </Button>
    ),
    drawerLabel: <Text style={{ fontWeight: 'bold' }}>Reservations</Text>,
    drawerIcon: () => <Icon name="md-list-box" />,
  });

  render() {
    return <Text>Manage Reservations</Text>;
  }
}

export default ManageReservations;
