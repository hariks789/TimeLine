
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  PropTypes,
  TouchableOpacity,
  Dimensions,
  Image,
  Text,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import Api from '../../../api/api';
const {width} = Dimensions.get('window');

type Props = {
  navigation: PropTypes.obj,
};
export default class TimelineList extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    Api.get('/featured').then(resp => {
      if(Array.isArray(resp)) this.setState({ featured: resp, loading: false })
    })
    Api.get('/popular').then(resp => {
      if(Array.isArray(resp)) this.setState({ popular: resp })
    })
  }

  renderContent = () => {
    const {featured} = this.state;
    return featured && featured.map((item, index) => {
      return(
        <TouchableOpacity
          key={index} style={styles.timeline}
          onPress={()=> {
            console.log('asdfhgfywgedsly');
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

  renderPopular = () => {
    const {popular} = this.state;
    return popular && popular.map((item, index) => {
      return(
        <TouchableOpacity
          key={index} style={styles.timeline}
          onPress={()=> {
            console.log('asdfhgfywgedsly');
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
      <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Featured</Text>
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
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Popular</Text>
        </View>
        {
          loading
          ?
          <ActivityIndicator size="large" color="#8bc34a" animating={loading} />
          :
          <View style={styles.timelineContainer}>
            {
              this.renderPopular()
            }
          </View>
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    elevation: 2,
    backgroundColor: '#f5f5f5',
    marginBottom: 10
  },
  titleText: {
    fontSize: 15,
    color: '#8bc34a',
    fontWeight: 'bold',
    flexWrap: 'wrap',
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
