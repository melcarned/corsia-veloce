import * as Expo from 'expo';
import React, { Component } from 'react';
import Index from './index';

class Setup extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }

  componentWillMount() {
    this.loadFonts();
  }

  /* eslint-disable global-require */
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
      ProximaNovaAltBold: require('./assets/fonts/Proxima-Nova-Alt-Bold.ttf'),
      ItalianBreakfastRegular: require('./assets/fonts/ItalianBreakfastRegular.ttf'),
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Index />
    );
  }
}

export default Setup;
