import React from 'react';
import createAppContainer from 'react-native'
import SignedOut from './screens/SignedOut'

import {createRootNavigator} from './screens/Router'
export default class App extends React.Component{
  render(){
    const Root = createAppContainer(createRootNavigator());
    return <Root/>;
  }
} 