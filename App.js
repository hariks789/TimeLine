
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './app/src/containers/home/home';
import EventDetails from './app/src/containers/eventFeed/event';
import About from './app/src/containers/userInfo/about';
import Faq from './app/src/containers/userInfo/faq';
import PrivacyPolicy from './app/src/containers/userInfo/privacyPolicy';
import Terms from './app/src/containers/userInfo/terms';

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    EventDetails: {
      screen: EventDetails,
    },
    About: {
      screen: About
    },
    PrivacyPolicy: {
      screen: PrivacyPolicy
    },
    Faq: {
      screen: Faq
    },
    Terms: {
      screen: Terms
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
