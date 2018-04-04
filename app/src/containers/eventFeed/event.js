
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const {width} = Dimensions.get('window');

type Props = {
  navigation: PropTypes.obj,
};
export default class EventDetails extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

	render() {
    const { params } = this.props.navigation.state;
    console.log('details', params.details);

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.headerContainer}
          onPress={()=>this.props.navigation.goBack()}
        >
          <Icon name="arrow-left" color='#fff' size={20} />
          <Text style={styles.headerText}>{params.details.item.timeline_name}</Text>
        </TouchableOpacity>
        <ScrollView style={styles.contentContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{width: 50, height: 50, marginRight: 10}}
              source={{uri: params.details.item.timeline_photo_url}}
              resizeMode="cover"
              borderRadius={25}
            />
            <Text style={{ fontSize: 16, color: 'black', paddingVertical: 5 }}>{params.details.item.timeline_name}</Text>
          </View>
          {
            params.details.item.photos
            ?
            <Image
              style={{width: 0.9*width, height: 200, resizeMode: 'contain', marginTop: 15}}
              source={{uri: params.details.item.photos[0].url}}
            />
            :
            null
          }
          <Text style={{ fontSize: 15, color: 'grey', padding: 10 }}>{params.details.item.title}</Text>
          <Text style={{ fontSize: 15, color: 'grey', padding: 10 }}>{params.details.item.description}</Text>
          {
            params.details.item.videos
            ?
            <WebView
              style={{width: 0.9*width, height: 200, marginTop: 15}}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{uri: params.details.item.videos[0].url}}
            />
            :
            null
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    flex: 0.1,
    flexDirection: 'row',
    paddingLeft: 10,
    backgroundColor: '#8bc34a',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 0.9,
    margin: 5,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5
  },
  headerText: {
    marginLeft: 10,
    fontSize: 20,
    color: '#fff'
  },
});
