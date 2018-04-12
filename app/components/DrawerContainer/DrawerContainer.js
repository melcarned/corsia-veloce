import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image } from 'react-native';
import { Text, View } from 'native-base';
import { NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  uglyDrawerItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E73536',
    padding: 15,
    margin: 5,
    borderRadius: 2,
    borderColor: '#E73536',
    borderWidth: 1,
    textAlign: 'center',
  },
});

export default class DrawerContainer extends PureComponent {
    static propTypes ={
      navigation: PropTypes.object,
    }

    render() {
      const { navigation } = this.props;
      return (
        <View style={styles.container}>
          <Text
            onPress={() => navigation.navigate('Home')}
            style={styles.uglyDrawerItem}
          >
          Screen 1
          </Text>
          <Text
            onPress={() => navigation.navigate('AboutUs')}
            style={styles.uglyDrawerItem}
          >
          Screen 2
          </Text>
          <Text
            onPress={() => navigation.navigate('ManageReservations')}
            style={styles.uglyDrawerItem}
          >
          Screen 3
          </Text>
          <Text
            onPress={() => navigation.navigate('MakeReservationStack')}
            style={styles.uglyDrawerItem}
          >
          Screen 3
          </Text>
          <Text
            onPress={() => navigation.navigate('ContactUs')}
            style={styles.uglyDrawerItem}
          >
          Screen 3
          </Text>
          <Text
            onPress={() => navigation.navigate('CallAnUber')}
            style={styles.uglyDrawerItem}
          >
          Screen 3
          </Text>
        </View>
      );
    }
}
