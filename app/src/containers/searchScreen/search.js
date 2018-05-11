
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  PropTypes,
  Image,
  ActivityIndicator,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Api from '../../../api/api';

const {width} = Dimensions.get('window');

type Props = {
  navigation: PropTypes.obj,
};
export default class Search extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      results: []
    };
  }

  getSearchResults = () => {
    const {text} = this.state;

    this.setState({ loading: true });
    Api.get(`/search?search=${text}`).then(resp => {
      if(Array.isArray(resp)) this.setState({ results: resp, loading: false })
    })
  }

  renderContent = () => {
    const {results} = this.state;
    return results && results.map((item, index) => {
      return(
        <TouchableOpacity
          key={index} style={styles.timeline}
          onPress={()=> {
            this.props.onSelect();
            this.props.navigation.navigate('Timeline', { id: item.id, details: item })
          }}
        >
          <Image
            style={{width: width*0.3, height: width*0.35}}
            source={{uri: item.photo}}
            resizeMode="cover"
          />
          <Text style={styles.name}>{item.name}</Text>
        </TouchableOpacity>
      )
    })
  }

	render() {
    const {loading} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <TextInput
            style={{height: 40, width: 0.85*width, borderColor: 'gray'}}
            onChangeText={(text) => this.setState({text}, ()=>this.getSearchResults())}
            value={this.state.text}
            underlineColorAndroid="#8bc34a"
          />
          <TouchableOpacity
            onPress={()=>this.getSearchResults()}
          >
            <Icon name="magnify" size={30} color="#8bc34a" />
          </TouchableOpacity>
        </View>
        {
          loading
          ?
          <ActivityIndicator size="large" color="#8bc34a" animating={loading} />
          :
          <View style={styles.timelineContainer}>
            {
              this.renderContent()
            }
            <View style={styles.timeline}>

            </View>
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchBox: {
    flexDirection: 'row',
    elevation: 2,
    padding: 10,
    justifyContent: 'center'
  },
  timelineContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    elevation: 1,
  },
  timeline: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
    width: width*0.3
  },
  name: {
    fontSize: 12,
    color: '#000',
    flexWrap: 'wrap',
  }
});
