
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  AsyncStorage,
} from 'react-native';
import Api from '../../../api/api';
import EventComp from '../../components/eventComp/eventComp';

type Props = {};
export default class MyFeed extends Component<Props> {
	constructor(props) {
    super(props);
    this.state = {
      events: []
    };
	}

  componentDidMount() {
    AsyncStorage.multiGet(['loggedIn', 'idToken']).then((data)=>{
      const loggedIn = data[0][1];
      const idToken = data[1][1];
      console.log('loggedIn', loggedIn);
      if(loggedIn) {
        Api.get('/follow-timeline-events?from-latest=false&start=0&l=14', idToken).then(resp => {
          if(Array.isArray(resp)) this.setState({ events: resp })
        })
      }
    })
  }

  renderItem(item) {
    return(
      <EventComp
        key={item.item.id}
        name={item.item.timeline_name}
        imageUrl={item.item.timeline_photo_url}
        time={item.item.timestamp}
        title={item.item.title}
        description={item.item.description ? item.item.description : ''}
        videos={item.item.videos}
        photos={item.item.photos}
      />
    );
  }

  _keyExtractor = item => item.index;

	render() {
		return (
			<View style={styles.container}>
        <FlatList
          data={this.state.events}
          renderItem={this.renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
