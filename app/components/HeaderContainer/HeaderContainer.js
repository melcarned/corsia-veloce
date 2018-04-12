import React from 'react';
import PropTypes from 'prop-types';
import { Header, Body, Title } from 'native-base';

const HeaderContainer = ({ title }) => (
  <Header>
    <Body>
      <Title>{title}</Title>
    </Body>
  </Header>
);

HeaderContainer.propTypes = {
  title: PropTypes.string,
};

export default HeaderContainer;
