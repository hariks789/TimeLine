
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  PropTypes,
  Image,
  WebView,
  ScrollView,
  TouchableOpacity,
  Text
} from 'react-native';

type Props = {
  navigation: PropTypes.obj,
};
export default class ClassName extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

	render() {
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>

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
