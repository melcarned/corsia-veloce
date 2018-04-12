import React, { Component } from 'react';
import Proptypes from 'prop-types';

import { Text, TouchableOpacity, View } from 'react-native';
import { Content, Form, Item, Input, Picker, Button, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import DateTimePicker from 'react-native-modal-datetime-picker';

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

  state = {
    isDateTimePickerVisible: false,
  };

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this.hideDateTimePicker();
  };

  handleSelectSeafood = () => {
    this.props.navigation.navigate('ReservationSummary');
  };

  render() {
    return (
      <Content padder>
        <Form>
          <Item regular>
            <Input placeholder="Name" />
          </Item>
          <Item regular>
            <Input placeholder="Email" />
          </Item>
          <Item regular>
            <Input placeholder="Phone Number" />
          </Item>
          <Grid>
            <Row>
              <Col>
                <Picker mode="dropdown" placeholder="Guests">
                  <Item label="1" value="key0" />
                  <Item label="2" value="key1" />
                  <Item label="3" value="key2" />
                  <Item label="4" value="key3" />
                  <Item label="5" value="key4" />
                  <Item label="6" value="key5" />
                  <Item label="7" value="key6" />
                  <Item label="8" value="key7" />
                  <Item label="9" value="key8" />
                  <Item label="10" value="key9" />
                </Picker>
              </Col>
              <Col>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity onPress={this.showDateTimePicker}>
                    <Text>Show DatePicker</Text>
                  </TouchableOpacity>
                  <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                  />
                </View>
              </Col>
            </Row>
          </Grid>
          <Button block primary onPress={this.handleSelectSeafood}>
            <Text style={{ fontWeight: 'bold' }}>Select Seafood</Text>
          </Button>
        </Form>
      </Content>
    );
  }
}

export default MakeReservation;
