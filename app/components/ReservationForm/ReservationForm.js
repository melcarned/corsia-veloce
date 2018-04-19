import React from 'react';
import { Container, Content, Text, Thumbnail, Button, Picker, Item } from 'native-base';
import Proptypes from 'prop-types';
import t from 'tcomb-form-native';
import moment from 'moment';
import styles from './styles';
import axios from 'axios';

const Form = t.form.Form;

const numberOfGuest = t.enums({
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10',
});

const reservation = t.struct({
  name: t.String,
  email: t.String,
  guests: numberOfGuest,
  date: t.Date,
  time: t.Date,
});

const options = {
  fields: {
    name: {
      placeholder: 'Your name',
      error: 'Please enter a name for the reservation.',
    },
    email: {
      placeholder: 'Email address',
      error: 'Please enter a valid email address.',
    },
    guests: {
      error: 'Please select the number of guest.',
      nullOption: { value: '', text: 'Select number of guest' },
    },
    date: {
      label: 'Reservation date',
      error: 'Please select a date.',
      mode: 'date',
      config: {
        format: date => moment(date).format('DD MMM YYYY'),
        dialogMode: 'calendar',
      },
    },
    time: {
      label: 'Reservation time',
      error: 'Please select a time.',
      mode: 'time',
      config: {
        format: date => moment(date).format('h:mm:ss a'),
        dialogMode: 'spinner',
      },
    },
  },
};

const ReservationForm = () => {
    const handleClickReservation = () => {
        const value = this._form.getValue(); // use that ref to get the form value
        console.log('value: ', value);

        if (value !== null) {
        axios.post('http://localhost:5000/api/newReservation/', value)
            .then((res) => {
            const testAPI = res.data;
            console.log(JSON.stringify(testAPI));
            this.props.navigation.navigate('Home');
            if (res.status === 201) {
                this.props.navigation.navigate('Home');
            }
            })
            .catch((error) => {
            console.log(error);
            });
        }
    };

  return (
    <Content>
      <Form ref={c => (this._form = c)} options={options} type={reservation} />
      <ConfirmReservation clicked={this.handleClickReservation} btnText="Confirm Reservation" />
    </Content>
  );
};

export default ReservationForm;
