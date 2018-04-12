import React from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableHighlight } from 'react-native';
import { ListItem, Content, Text, Button, List, Grid, Left, Row, Col } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';

import MenuItem from './MenuItem';

const styles = EStyleSheet.create({
  content: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  text: {
    fontFamily: 'ProximaNovaAltBold',
    fontWeight: 'bold',
  },
});


const MenuSection = ({ data, clickItem }) => (
  <Content>
    <ListItem itemHeader style={styles.content}>
      <Text style={styles.text}>{data.sectionTitle}</Text>
    </ListItem>
    <ListItem>
      <List
        dataArray={data.items}
        renderRow={item =>
          <MenuItem clickItem={clickItem} data={item} />
        }
      />
    </ListItem>
  </Content>
);

MenuSection.propTypes = {
  data: PropTypes.object,
  clickItem: PropTypes.func,
};

export default MenuSection;
