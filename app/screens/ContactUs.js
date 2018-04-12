import React, { Component } from 'react';
import { Text, Button, Icon } from 'native-base';

class ContactUs extends Component {
    static navigationOptions = ({ navigation }) => ({
      title: <Text style={{ fontWeight: 'bold' }}>Contact Us</Text>,
      headerLeft: (
        <Button
          transparent
          onPress={() => navigation.goBack()}
          title="Info"
        ><Icon name="md-arrow-round-back" />
        </Button>
      ),
      drawerLabel: <Text style={{ fontWeight: 'bold' }}>Contact Us</Text>,
      drawerIcon: () => <Icon name="md-mail" />,
    });

    render() {
      return (
        <Text>Contact Us</Text>
      );
    }
}

export default ContactUs;
