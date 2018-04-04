
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './app/src/containers/home/home';
import EventDetails from './app/src/containers/eventFeed/event';

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    EventDetails: {
      screen: EventDetails,
    }
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
