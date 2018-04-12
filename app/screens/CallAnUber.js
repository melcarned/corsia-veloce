import React, { Component } from 'react';
import { Text, Button, Icon } from 'native-base';

class CallAnUber extends Component {
    static navigationOptions = ({ navigation }) => ({
      title: <Text style={{ fontWeight: 'bold' }}>Call an Uber</Text>,
      headerLeft: (
        <Button
          transparent
          onPress={() => navigation.goBack()}
          title="Info"
        ><Icon name="md-arrow-round-back" />
        </Button>
      ),
      drawerLabel: <Text style={{ fontWeight: 'bold' }}>Call an Uber</Text>,
      drawerIcon: () => <Icon name="md-car" />,
    });

    render() {
      return (
        <Text>Call an Uber</Text>
      );
    }
}

export default CallAnUber;
