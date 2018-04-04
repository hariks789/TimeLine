
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Dimensions,
  TouchableOpacity,
  View,
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
        <View style={styles.topContainer}>
          <Button title="SignIn" />
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.button}>
            <Icon name="help-circle"/>
            <Text style={styles.buttonText}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name="library-books"/>
            <Text style={styles.buttonText}>Terms & Conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name="circle" />
            <Text style={styles.buttonText}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name="circle" />
            <Text style={styles.buttonText}>About</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    elevation: 1,
    borderBottomColor: '#f5f5f5'
  },
  bottomContainer: {
    flex: 0.8,
  },
  button: {
    flexDirection: 'row',
    padding: 10,
    alignItems:'center'
  },
  buttonText: {
    paddingLeft: 10
  }

});
