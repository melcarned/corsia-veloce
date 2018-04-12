import React from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableHighlight } from 'react-native';
import { ListItem, Body, Thumbnail, Content, Text, CardItem, Grid, Left, Row, Col } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  content: {
    paddingLeft: 0,
    marginLeft: 0,
  },
  text: {
    fontFamily: 'ProximaNovaAltBold',
    fontWeight: 'bold',
  },
});


const MenuItem = ({ data, clickItem }) => (
  <Content>
    <ListItem style={styles.content} button onPress={() => clickItem(data)}>
      <Grid>
        <Row>
          <Text style={styles.text}>{data.title}</Text>
        </Row>
        <Row>
          <Text note>{data.description}</Text>
        </Row>
      </Grid>

    </ListItem>
  </Content>
);

MenuItem.propTypes = {
  data: PropTypes.object,
  clickItem: PropTypes.func,
};

export default MenuItem;
