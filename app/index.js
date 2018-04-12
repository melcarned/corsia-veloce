import React from 'react';
import { Root } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';

import Router from './config/routes';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',

  $white: '#FFF',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#cccccc',
  $darkText: '#343434',
});


export default () => (
  <Root>
    <Router />
  </Root>
);
