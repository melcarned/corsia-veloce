import React, { Component } from 'react';
import {
  Container,
  Content,
  Text,
  List,
  ListItem,
  Thumbnail,
  Body,
  Button,
  Icon,
} from 'native-base';
import Proptypes from 'prop-types';

class SelectSauce extends Component {
  static propTypes = {
    navigation: Proptypes.object,
  };

  static navigationOptions = ({ navigation }) => ({
    title: <Text style={{ fontWeight: 'bold' }}>Select Sauce</Text>,
    headerLeft: (
      <Button transparent onPress={() => navigation.goBack(null)} title="Info">
        <Icon name="md-arrow-round-back" />
      </Button>
    ),
  });

  handleReviewReservation = () => {
    this.props.navigation.navigate('ReservationSummary');
  };

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem button onPress={this.handleReviewReservation}>
              <Thumbnail square size={80} />
              <Body>
                <Text>Pomodoro e basilico (Tomato Basil)</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Text>Aglio al limone (Lemon Garlic)</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default SelectSauce;
