import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Content, Button, Text } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  button: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },
});

const ConfirmReservation = ({ clicked, btnText }) => (
  <View style={styles.container}>
    <Button block style={styles.button} onPress={clicked}>
      <Text style={styles.text}>{btnText}</Text>
    </Button>
  </View>
);

ConfirmReservation.propTypes = {
  clicked: PropTypes.func,
  btnText: PropTypes.string,
};

export default ConfirmReservation;
