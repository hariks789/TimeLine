
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import NavBar from '../../components/navBar/navBar';

export default class Terms extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

	render() {

    return (
      <View style={styles.container}>
        <NavBar navigation={this.props.navigation} />
        <Text>Work Under Progress :)</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  }
});
