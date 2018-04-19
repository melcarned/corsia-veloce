import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Content, Button, Text } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  button: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: 'white',
    borderRadius: 5,
    width: '50%',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

const ReservationButton = ({ clicked, btnText }) => (
  <View>
    <Button style={styles.button} onPress={clicked}>
      <Text style={styles.text}>{btnText}</Text>
    </Button>
  </View>
);

ReservationButton.propTypes = {
  clicked: PropTypes.func,
  btnText: PropTypes.string,
};

export default ReservationButton;

