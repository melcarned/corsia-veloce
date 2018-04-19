import React from 'react';
import PropTypes from 'prop-types';
import { Header, Body, Text, Button, Icon, Left, Right } from 'native-base';

import styles from './styles';

const HeaderContainer = ({ title }) => (
  <Header style={styles.header} hasTabs>
    <Body>
      <Text style={styles.headerText}>{title}</Text>
    </Body>
  </Header>
);

HeaderContainer.propTypes = {
  title: PropTypes.string,
};

export default HeaderContainer;
