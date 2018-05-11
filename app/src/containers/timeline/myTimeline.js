
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  PropTypes,
  Image,
  FlatList,
  Text,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import Api from '../../../api/api';
import TimelineComp from './timelineComp';
const {width} = Dimensions.get('window');

type Props = {
  navigation: PropTypes.obj,
};
export default class MyTimeline extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      events: [],
      start: 0,
      end: 15,
      loggedIn: false
    };
  }

  componentDidMount() {
    AsyncStorage.multiGet(['loggedIn', 'idToken', 'userTimeID', 'userName', 'userPhoto']).then((data)=>{
      const loggedIn = data[0][1];
      const idToken = data[1][1];
      const userTimeID = data[2][1];
      const name = data[3][1];
      const photo = data[4][1];
      console.log('loggedIn', userTimeID, 'dfsghfdghghf');
      if(loggedIn) {
        this.setState({ loggedIn: true, userTimeID, idToken, name, photo })
        this.getData();
      }
    })
  }

  getData = () => {
    const { start, end, events, loggedIn, userTimeID, idToken} = this.state;
    if(loggedIn) {
      Api.get(`/events/auth/${userTimeID}?edit=null&from-latest=false&start=${start}&l=${end}`, idToken).then(resp => {
        console.log('resp, ', resp);
        if(Array.isArray(resp)) this.setState({ events: [...events, ...resp], loading: false, start:start+16, end: end+15 })
      })
    }
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
    const {loading, name, photo} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={{width: width*0.28, height: width*0.35}}
              source={{uri: photo}}
              resizeMode="cover"
            />
          </View>
          <View style={styles.abstractContainer}>
            <Text style={styles.name}>{name}</Text>
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
