
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
import NavBar from '../../components/navBar/navBar';

type Props = {
  navigation: PropTypes.obj,
};
export default class About extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

	render() {
    const { params } = this.props.navigation.state;

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
