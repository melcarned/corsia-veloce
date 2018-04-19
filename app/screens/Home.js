import React, { Component } from 'react';
import axios from 'axios';

import { Image, View, ImageBackground, ScrollView, StatusBar } from 'react-native';
import Proptypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  Title,
  Thumbnail,
  Subtitle,
  Left,
  Body,
  Right,
  TabHeading,
  Text,
  Tabs,
  Tab,
  Header,
  Footer,
  Grid,
  Row,
  Col,
  Container,
  Content,
  Icon,
  Button,
  FooterTab,
} from 'native-base';

import Menu from '../components/Menu/Menu';
import MenuData from '../data/menu';
import ReservationButton from '../components/ReservationButton/ReservationButton';
import HeaderContainer from '../components/HeaderContainer/index';
import About from '../components/About/About';
import MakeReservation from './MakeReservation';

const styles = EStyleSheet.create({
  tabs: {
    backgroundColor: 'black',
    color: 'black',
  },
});

class Home extends Component {
  static propTypes = {
    navigation: Proptypes.object,
  };

  componentWillMount() {
    axios.get('http://localhost:5000/')
      .then((res) => {
        const testAPI = res.data;
        console.log(JSON.stringify(testAPI));
      });
    console.log(JSON.stringify(MenuData));
  }

  handleClickReservation = () => {
    this.props.navigation.navigate('MakeReservation');
  }

  render() {
    return (
      <Container style={{ backgroundColor: 'black' }}>
        <Tabs tabBarUnderlineStyle={{ borderBottomWidth: 0 }} initialPage={1} tabBarPosition="bottom">
          <Tab
            style={{ backgroundColor: 'red' }}
            activeTabStyle={{ backgroundColor: 'red' }}
            textStyle={{ backgroundColor: 'red' }}
            activeTextStyle={{ backgroundColor: 'red' }}
            tabStyle={{
              backgroundColor: 'red',
            }}
            heading={<TabHeading><Icon name="home" /></TabHeading>}
          >
            <About />
          </Tab>
          <Tab heading={<TabHeading><Icon name="book" /></TabHeading>}>
            <Menu />
          </Tab>
          <Tab heading={<TabHeading><Icon name="clock" /></TabHeading>}>
            <MakeReservation />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default Home;
