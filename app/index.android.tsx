import React, { Component } from 'react'
import Main from './containers/Main'
import { AppRegistry } from 'react-native'
import { NativeRouter } from 'react-router-native'

export interface Props {}
export interface State {}
export default class ReactNativeSkeleton extends Component<Props, State> {
  render() {
    return (
      <NativeRouter>
        <Main/>
      </NativeRouter>
    )
  }
}

AppRegistry.registerComponent('ReactNativeSkeleton', () => ReactNativeSkeleton)
