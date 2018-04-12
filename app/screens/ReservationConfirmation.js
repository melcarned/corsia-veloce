import React, { Component } from 'react';
import { Container, Content, Text, Thumbnail, Button, Form, Picker, Item } from 'native-base';
import Proptypes from 'prop-types';

import HeaderContainer from '../components/HeaderContainer';
import ReservationButton from '../components/ReservationButton/ReservationButton';

const confirmed = require('../assets/confirmed.png');

class ReservationConfirmation extends Component {
  static propTypes = {
    navigation: Proptypes.object,
  };

  static navigationOptions = () => ({
    header: () => null,
  });

  handleClickDone = () => {
    this.props.navigation.navigate('DrawerStack');
  };

  render() {
    return (
      <Container>
        <HeaderContainer title="Confirmation" />
        <Content center>
          <Thumbnail source={confirmed} />
          <Text>Your all set for your reservation at 6pm Apr10th for 5</Text>
          <Text>Would you like a reminder?</Text>
          <Form>
            <Picker mode="dropdown" placeholder="Select One">
              <Item label="No thanks" value="key0" />
              <Item label="Yes,though Email" value="key1" />
              <Item label="Yes,though Notification" value="key2" />
            </Picker>
          </Form>
          <ReservationButton btnText="DONE" clicked={this.handleClickDone} />
        </Content>
      </Container>
    );
  }
}
export default ReservationConfirmation;
