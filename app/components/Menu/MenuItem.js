import React from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableHighlight } from 'react-native';
import { ListItem, Body, Thumbnail, Content, Text, CardItem, Grid, Left, Right, Row, Col } from 'native-base';

import styles from './styles';

const MenuItem = ({ data }) => (
  <Content>
    <ListItem avatar style={styles.menuItem}>
      <Left>
        <Thumbnail source={data.image} />
      </Left>
      <Body style={styles.menuItemBody}>
        <Text style={styles.menuItemText}>{data.title}</Text>
        <Text note style={styles.menuItemNote}>{data.description}</Text>
      </Body>
    </ListItem>
  </Content>
);

MenuItem.propTypes = {
  data: PropTypes.object,
};

export default MenuItem;
