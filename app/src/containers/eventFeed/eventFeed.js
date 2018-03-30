
import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View
} from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import MyFeed from './myFeed';
import Today from './today';
import Upcoming from './upcoming';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

type Props = {};
export default class EventFeed extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'first', title: 'Today' },
        { key: 'second', title: 'My Timeline' },
        { key: 'third', title: 'Upcoming' },
      ],
    };
	}

  handleIndexChange = index => this.setState({ index });

  renderHeader = props => <TabBar {...props} style={{backgroundColor: '#fff'}} labelStyle={{ color: 'green' }} indicatorStyle={{ borderColor: 'green' }} />;

  renderScene = ({ route }) => {
    switch (route.key) {
    case 'first':
      return <Today />;
    case 'second':
      return <MyFeed />;
    case 'third':
      return <Upcoming />;
    default:
      return null;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TabViewAnimated
          navigationState={this.state}
          renderScene={this.renderScene}
          renderHeader={this.renderHeader}
          onIndexChange={this.handleIndexChange}
          initialLayout={initialLayout}
          useNativeDriver
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
