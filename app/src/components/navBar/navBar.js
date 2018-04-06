
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  PropTypes,
  Image,
  ScrollView,
  TouchableOpacity,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
const {height} = Dimensions.get('window');

type Props = {
  navigation: PropTypes.obj,
};
export default class NavBar extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

	render() {
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.headerContainer}
          onPress={()=>this.props.navigation.goBack()}
        >
          <Icon name="arrow-left" size={20}/>
          <Text style={styles.headerText}>Timeline</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8bc34a',
    height: 0.08*height,
    justifyContent: 'center'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8bc34a',
  },
  headerText: {
    paddingLeft: 10,
    fontSize: 18
  }
});
