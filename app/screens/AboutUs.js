import React, { Component } from 'react';
import { Text, Button, Icon } from 'native-base';

class AboutUs extends Component {
    static navigationOptions = ({ navigation }) => ({
      title: <Text style={{ fontWeight: 'bold' }}>About Us</Text>,
      headerLeft: (
        <Button
          transparent
          onPress={() => navigation.goBack()}
          title="Info"
        ><Icon name="md-arrow-round-back" />
        </Button>
      ),
      drawerLabel: <Text style={{ fontWeight: 'bold' }}>About Us</Text>,
      drawerIcon: () => <Icon name="md-information-circle" />,
    });

    render() {
      return (
        <Text>About Us</Text>
      );
    }
}

export default AboutUs;
