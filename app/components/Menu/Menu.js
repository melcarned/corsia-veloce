import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { Content, List } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';

import MenuSimple from '../../data/menu';
import MenuSection from './MenuSection';

const styles = EStyleSheet.create({
  content: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
  },
});

const Menu = ({ clickItem }) => (
  <Content style={{ backgroundColor: 'white' }}>
    <List
      dataArray={MenuSimple.menu}
      renderRow={item => <MenuSection clickItem={clickItem} data={item} />}
    />
  </Content>
);

Menu.propTypes = {
  clickItem: PropTypes.func,
};

export default Menu;
