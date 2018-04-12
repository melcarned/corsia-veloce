import React, { Component } from 'react';
import Proptypes from 'prop-types';
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

class SelectSeafood extends Component {
  static propTypes = {
    navigation: Proptypes.object,
  };

  static navigationOptions = ({ navigation }) => ({
    title: <Text style={{ fontWeight: 'bold' }}>Select Seafood</Text>,
    headerLeft: (
      <Button transparent onPress={() => navigation.goBack(null)} title="Info">
        <Icon name="md-arrow-round-back" />
      </Button>
    ),
  });

  handleSelectSauce = () => {
    this.props.navigation.navigate('SelectSauce');
  };

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem button onPress={this.handleSelectSauce}>
              <Thumbnail square size={80} />
              <Body>
                <Text>Scaloppine (Scallops)</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Text>Scaloppine (Scallops)</Text>
            </ListItem>
            <ListItem>
              <Text>Scaloppine (Scallops)</Text>
            </ListItem>
            <ListItem last>
              <Text>Scaloppine (Scallops)</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default SelectSeafood;
