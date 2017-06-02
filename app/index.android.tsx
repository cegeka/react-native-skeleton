import React, { Component } from 'react';
import Main from './app/components/Main';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ReactNativeSkeleton extends Component {
  render() {
    return (
      <Main/>
    );
  }
}

AppRegistry.registerComponent('ReactNativeSkeleton', () => ReactNativeSkeleton);
