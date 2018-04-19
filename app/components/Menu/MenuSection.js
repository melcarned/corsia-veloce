import React from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableHighlight } from 'react-native';
import { ListItem, Content, Icon, Text, Button, List, Grid, Left, Row, Col } from 'native-base';

import styles from './styles';
import MenuItem from './MenuItem';

const MenuSection = ({ data }) => (
  <Content>
    <ListItem itemHeader style={styles.menuSectionHeader}>
      <Icon left style={{ fontSize: 18 }} name="menu" />
      <Text style={styles.menuSectionText}>{data.sectionTitle}</Text>
    </ListItem>
    <ListItem style={styles.menuSection}>
      <List dataArray={data.items} renderRow={item => <MenuItem data={item} />} />
    </ListItem>
  </Content>
);
MenuSection.propTypes = {
  data: PropTypes.object,
};

export default MenuSection;
