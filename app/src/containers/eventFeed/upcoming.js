
import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import Api from '../../../api/api';
import EventComp from '../../components/eventComp/eventComp';

type Props = {};
export default class Upcoming extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    Api.get('/popular-upcoming-events?from-latest=false&a=0&l=14').then(resp => {
      this.setState({ events: resp })
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
