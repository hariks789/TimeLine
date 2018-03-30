
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  View,
	TextInput,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const {height, width} = Dimensions.get('window');

type Props = {};
export default class UserInfo extends Component<Props> {
	constructor(props) {
	super(props);

	}


	render() {
		return (
			<View style={styles.container}>
        <Text>Coming Soon :)</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
