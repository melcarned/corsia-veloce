import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  button: {
    backgroundColor: 'black',
    borderRadius: 5,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

const ReservationButton = ({ clicked, btnText }) => (
  <Button transparent block style={styles.button} onPress={clicked}>
    <Text style={styles.text}>{btnText}</Text>
  </Button>
);

ReservationButton.propTypes = {
  clicked: PropTypes.func,
  btnText: PropTypes.string,
};

export default ReservationButton;

