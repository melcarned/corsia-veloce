import React, { Component } from 'react';
import { Container, Content, Text, Thumbnail, Button, Form, Picker, Item } from 'native-base';
import Proptypes from 'prop-types';

const confirmed = require('../../assets/confirmed.png');

class ReservationConfirmation extends Component {
  static propTypes = {
    navigation: Proptypes.object,
  };

  handleClickDone = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <Container>
        <Content>
          <Thumbnail source={confirmed} />
          <Text>Your all set for your reservation at 6pm Apr10th for 5</Text>
          {/* <ReservationButton btnText="DONE" clicked={this.handleClickDone} /> */}
        </Content>
      </Container>
    );
  }
}
export default ReservationConfirmation;
