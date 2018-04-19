import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, List } from 'native-base';

import MenuSimple from '../../data/menu';
import MenuSection from './MenuSection';
import HeaderContainer from '../HeaderContainer';

const Menu = () => (
  <Container>
    <HeaderContainer title="Menu" />
    <Content style={{ backgroundColor: 'white', paddingBottom: 100 }}>
      <List
        dataArray={MenuSimple.menu}
        renderRow={item => <MenuSection data={item} />}
      />
    </Content>
  </Container>
);

export default Menu;
