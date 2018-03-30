
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './app/src/containers/home/home';

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

export default class App extends Component<{}> {
  render() {
    return <RootStack />;
  }
}
