
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  PropTypes,
  Text
} from 'react-native';

type Props = {
  content: PropTypes.obj
};
export default class TimelineComp extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

	render() {
    console.log('data', this.props.content);
    const { content } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.time}>{content.item.timestamp.toString().slice(0,4)}</Text>
        <Text style={styles.title}>{content.item.title}</Text>
        <Text style={styles.description}>{content.item.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 5,
    elevation: 2,
    padding: 10
  },
  time: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold'
  },
  title: {
    fontSize: 18,
    paddingVertical: 5,
    color: '#000'
  }
});
