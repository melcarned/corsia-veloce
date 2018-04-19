import React from 'react';
import {
  Container,
  Content,
  Text,
  Thumbnail,
  Button,
  Picker,
  Item,
} from 'native-base';
import Proptypes from 'prop-types';
import { Image, TabHeading, View, ImageBackground, ScrollView, StatusBar } from 'react-native';

import HeaderContainer from '../HeaderContainer/index';
import styles from './styles';

const About = () => (
  <Content>
    <HeaderContainer title="Restaurant" />
    <View style={styles.content}>
      <Text style={styles.logo}>Corsia Veloce</Text>
      <Text style={styles.text}>Brushetta, Seafood & Wine bar</Text>
      <View style={{ height: 50 }} />
      <Image style={styles.restaurantImage} source={require('../../assets/Corsia.jpg')} />
      <View style={{ height: 50 }} />
      <Text style={styles.text}>
      Corsia Veloce is all about family. we love the family. we are apart of the family.
      </Text>
    </View>
  </Content>
);

export default About;
