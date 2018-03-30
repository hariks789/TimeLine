
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const {height, width} = Dimensions.get('window');

type Props = {};
export default class ProfileCard extends Component<Props> {

	render() {
		return (
      <TouchableOpacity>
        <Image source={require('./image1.jpg')} style={styles.image}></Image>
        <Text style={styles.contentName}>Elon Musk</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flex: 0.1,
    flexDirection: 'row',
    backgroundColor: '#8bc34a',
    alignItems: 'center',
    paddingLeft: 20
  },
  tabContainer: {
    flex: 0.05,
    flexDirection: 'row',
    backgroundColor: 'blue'
  },
  tab: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabText: {
    fontSize: 15,
    color: '#8bc34a'
  },
  headerText: {
    fontSize: 20,
    paddingLeft: 10,
    color: '#fff'
  },
  contentName: {
    fontSize: 15,
    color: '#000',
    marginBottom: 10
  },
  contentContainer: {
    padding: 10,
    paddingTop: 0,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 0.9
  },
  image: {
    width: width*0.45,
    height: width*0.45,
  }
});
