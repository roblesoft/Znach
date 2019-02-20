import React from 'react';
import axios from 'axios'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import Home from './Home'
import Registration from './Registration'

const RootStack =  createStackNavigator({
  Home:{ 
    screen: Home
  },
  Registration: {
    screen: Registration
  }
}, {headerMode: 'none'})

const App = createAppContainer(RootStack)
export default App