import React, { Component } from 'react'
import Main from './components/Main'
import { AppRegistry } from 'react-native'

export interface Props {}
export interface State {}
export default class ReactNativeSkeleton extends Component<Props, State> {
  render() {
    return (
      <Main/>
    )
  }
}

AppRegistry.registerComponent('ReactNativeSkeleton', () => ReactNativeSkeleton)
