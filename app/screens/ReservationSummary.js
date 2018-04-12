import React, { Component } from 'react';
import { Container, Content, Text, List, ListItem, Icon, Button, Separator } from 'native-base';
import Proptypes from 'prop-types';

class ReservationSummary extends Component {
  static propTypes = {
    navigation: Proptypes.object,
  };

  static navigationOptions = ({ navigation }) => ({
    title: <Text style={{ fontWeight: 'bold' }}>Summary</Text>,
    headerLeft: (
      <Button transparent onPress={() => navigation.goBack(null)} title="Info">
        <Icon name="md-arrow-round-back" />
      </Button>
    ),
  });

  handleConfirmReservation = () => {
    this.props.navigation.navigate('ReservationConfirmation');
  };

  render() {
    return (
      <Container>
        <Content>
          <List>
            <Separator bordered>
              <Text>Bruschetta</Text>
            </Separator>
            <ListItem>
              <Text>Pomodoro e basilico (Tomato Basil)</Text>
            </ListItem>
            <Separator bordered>
              <Text>Fruit di Mare</Text>
            </Separator>
            <ListItem>
              <Text>Scallops</Text>
            </ListItem>
            <ListItem>
              <Text>with Aglio al limone (Lemon Garlic)</Text>
            </ListItem>
            <Separator bordered>
              <Text>Frutta</Text>
            </Separator>
            <ListItem>
              <Text>with Aglio al limone (Lemon Garlic)</Text>
            </ListItem>
            <Separator bordered>
              <Text>Frutta</Text>
            </Separator>
            <ListItem>
              <Text>with Aglio al limone (Lemon Garlic)</Text>
            </ListItem>
            <ListItem>
              <Text>with Aglio al limone (Lemon Garlic)</Text>
            </ListItem>
          </List>
          <Button block bordered primary onPress={this.handleConfirmReservation}>
            <Text>Confirm Reservation</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default ReservationSummary;
