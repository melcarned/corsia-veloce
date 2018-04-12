import React, { Component } from 'react';
import { Image, View, ImageBackground, ScrollView } from 'react-native';
import Proptypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  Text,
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
import ReactNativeParallaxHeader from 'react-native-parallax-header';

import Menu from '../components/Menu/Menu';
import MenuData from '../data/menu';
import ReservationButton from '../components/ReservationButton/ReservationButton';

const styles = EStyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    backgroundColor: 'rgba(0,0,0,0.65)',
  },
  logo: {
    color: 'white',
    fontSize: 75,
    fontFamily: 'ItalianBreakfastRegular',
  },
  text: {
    fontFamily: 'ProximaNovaAltBold',
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    backgroundColor: '#fff',
  },
  titleStyle: {
    fontSize: 16,
  },
});

class Home extends Component {
  static propTypes = {
    navigation: Proptypes.object,
  };

  static navigationOptions = ({ navigation }) => ({
    title: <Text style={styles.logo}>Corsia Veloce</Text>,
    // headerLeft: (
    //   <Button transparent onPress={() => navigation.navigate('MakeReservation')} title="Info">
    //     <Icon name="md-car" />
    //   </Button>
    // ),
    headerRight: (
      <Button transparent onPress={() => navigation.navigate('MakeReservation')} title="Info">
        <Icon name="md-time" />
      </Button>
    ),
    drawerLabel: <Text style={{ fontWeight: 'bold' }}>Menu</Text>,
    drawerIcon: () => <Icon style={{ width: 30, height: 30, borderRadius: 15 }} name="md-home" />,
    drawerLockMode: 'unlocked',
  });

  componentWillMount() {
    console.log(JSON.stringify(MenuData));
  }

  handleSelectMenuItem = (data) => {
    console.log('ViewMenuItem');
    this.props.navigation.navigate('ViewMenuItem', { data });
  };

  handleClickMakeReservation = () => {
    console.log('HandleSelectSeafood');
    this.props.navigation.navigate('MakeReservation');
  };

  render() {
    return (
      <Container style={{ backgroundColor: 'white' }}>
        <Content>
          <Grid>
            <Row size={50}>
              <ImageBackground
                style={{ width: '100%', height: '100%' }}
                source={require('../assets/Corsia.jpg')}
              >
                <View style={styles.content}>
                  <Icon
                    style={{
                        color: 'white',
                        borderRadius: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    name="md-car"
                  />,
                  <Text style={styles.logo}>Corsia Veloce</Text>
                  <Text style={styles.text}>Brushetta, Seafood & Wine bar</Text>
                </View>
              </ImageBackground>
            </Row>
            <Row size={50}>
              <Menu />
            </Row>
          </Grid>
          {/* <ReservationButton btnText="RESERVATIONS" clicked={this.handleClickMakeReservation} />
          <Content>
            <Menu clickItem={this.handleSelectMenuItem} />
          </Content>
          <Text>Menu</Text> */}
        </Content>
        <Footer style={{ backgroundColor: 'white' }}>
          <FooterTab style={{ backgroundColor: 'black' }}>
            <Button style={{ backgroundColor: 'white' }} active>
              <Icon name="md-book" />
            </Button>
            <Button style={{ backgroundColor: 'transparent' }}>
              <Icon name="md-time" />
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    );
  }
}

{
  /* <Grid>
<Row size={2}>
  <Image source={require('../assets/Calamari.jpg')} style={{ height: '100%', width: null, flex: 1 }} />
</Row>
<Row size={3}>
</Row>
</Grid> */
}
// {/* <Footer style={{ backgroundColor: 'black', border: 'none' }}>
// <ReservationButton btnText="RESERVE A TABLE" clicked={this.handleClickMakeReservation} />
// </Footer> */}

export default Home;
