
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  PropTypes,
  Image,
  FlatList,
  Text,
  ActivityIndicator
} from 'react-native';
import NavBar from '../../components/navBar/navBar';
import Api from '../../../api/api';
import TimelineComp from './timelineComp';
const {width} = Dimensions.get('window');

type Props = {
  navigation: PropTypes.obj,
};
export default class Timeline extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      events: [],
      start: 0,
      end: 15
    };
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.getData();
    Api.get(`/${params.details.url}`).then(resp => {
      this.setState({ timeline: resp, loading: false })
    })
  }

  getData = () => {
    const { params } = this.props.navigation.state;
    const { start, end, events} = this.state;
    Api.get(`/events/${params.details.id}?edit=null&from-latest=false&start=${start}&l=${end}`).then(resp => {
      console.log('resp, ', resp);
      if(Array.isArray(resp)) this.setState({ events: [...events, ...resp], loading: false, start:start+16, end: end+15 })
    })
  }

  renderItem = (item) => {
    return(
      <TimelineComp
        content={item}
        key={item.item.id}
      />
    );
  }

  renderFooter = () => {
    if (!this.state.loading) return null;
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

	render() {
    const { params } = this.props.navigation.state;
    const {loading} = this.state;

    return (
      <View style={styles.container}>
        <NavBar navigation={this.props.navigation} name={params.details.name} />
        <View style={styles.topContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={{width: width*0.28, height: width*0.35}}
              source={{uri: params.details.photo}}
              resizeMode="cover"
            />
          </View>
          <View style={styles.abstractContainer}>
            <Text style={styles.name}>{params.details.name}</Text>
            <Text style={styles.content}>{params.details.title}</Text>
          </View>
        </View>
        {
          loading
          ?
          <ActivityIndicator size="large" color="#8bc34a" animating={loading} />
          :
          <View style={styles.timelineContainer}>
            <FlatList
              data={this.state.events}
              renderItem={this.renderItem}
              extraData={this.state.events}
              keyExtractor={this._keyExtractor}
              onEndReached={this.getData.bind(this)}
              onEndReachedThreshold={0.5}
              ListFooterComponent={this.renderFooter}
            />
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
  topContainer: {
    flexDirection: 'row',
    flex: 0.25,
    flexGrow: 0.3,
    padding: 10,
    backgroundColor: '#fff',
    elevation: 2
  },
  timelineContainer: {
    flex: 0.7
  },
  imageContainer: {
    flex: 0.3,
    overflow: 'hidden'
  },
  name: {
    fontSize: 18,
    color: '#000'
  },
  abstractContainer: {
    flex:0.7,
    flexDirection: 'column',
    marginLeft: 10,
    flexWrap: 'wrap',
  },
  content: {
    fontSize: 14,
    color: '#000'
  }
});
