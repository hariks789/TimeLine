
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  PropTypes,
  Dimensions,
  View,
  StatusBar,
} from 'react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserInfo from '../userInfo/userInfo';
import EventFeed from '../eventFeed/eventFeed';
import Timeline from '../timeline/timelineList';

const {height, width} = Dimensions.get('window');

type Props = {
  navigation: PropTypes.obj
};
export default class Home extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      tabCount: 0
    };
  }

  renderContent = () => {
    if(this.state.tabCount === 2) {
      return(
        <Timeline navigation={this.props.navigation}/>
      );
    } else if(this.state.tabCount === 0) {
      return(
        <EventFeed navigation={this.props.navigation}/>
      );
    }
    else if(this.state.tabCount === 4) {
      return(
        <UserInfo navigation={this.props.navigation}/>
      );
    } else {
      return(
        <View style={styles.container}>
          <Text>Coming Soon :)</Text>
        </View>
      );
    }
	}

	render() {
    console.disableYellowBox = true;

    return (
      <View style={styles.container}>
        <StatusBar
          hidden
        />
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Timeline</Text>
        </View>
        <View style={{ flex: 0.85 }}>
          {
            this.renderContent()
          }
        </View>
        <View style={styles.bottomTab}>
          {/* <TouchableOpacity
            style={styles.bottomTabButton}
            onPress={()=>{this.setState({ tabCount: 0})}}
          >
            <Icon name="home" color="#fff" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomTabButton}
            onPress={()=>{this.setState({ tabCount: 1})}}
          >
            <Icon name="magnify" color="#fff" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomTabButton}
            onPress={()=>{this.setState({ tabCount: 1})}}
          >
            <Icon name="magnify" color="#fff" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomTabButton}
            onPress={()=>{this.setState({ tabCount: 2})}}
          >
            <Icon name="plus" color="#fff" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomTabButton}
            onPress={()=>{this.setState({ tabCount: 3})}}
          >
            <Icon name="account" color="#fff" size={30} />
          </TouchableOpacity> */}
          <BottomNavigation
            labelColor="white"
            rippleColor="white"
            style={{
              height: 56,
              elevation: 8,
              position: 'absolute',
              left: 0,
              bottom: 0,
              right: 0
            }}
            activeTab={this.state.tabCount}
            onTabChange={newTabIndex => { console.log('newTabIndex', newTabIndex);this.setState({ tabCount: newTabIndex})}}
          >
            <Tab
              barBackgroundColor="#8bc34a"
              label="Home"
              icon={<Icon size={24} color="white" name="home" />}
            />
            <Tab
              barBackgroundColor="#00796B"
              label="Search"
              icon={<Icon size={24} color="white" name="magnify" />}
            />
            <Tab
              barBackgroundColor="#8bc34a"
              label="Discover"
              icon={<Icon size={24} color="white" name="book" />}
            />
            <Tab
              barBackgroundColor="#8bc34a"
              label="Add"
              icon={<Icon size={24} color="white" name="plus" />}
            />
            <Tab
              barBackgroundColor="#8bc34a"
              label="User"
              icon={<Icon size={24} color="white" name="account" />}
            />
          </BottomNavigation>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flex: 0.075,
    justifyContent: 'center',
    backgroundColor: '#8bc34a',
    alignItems: 'center',
    elevation: 2
  },
  tabContainer: {
    flex: 0.075,
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
    color: '#fff'
  },
  contentName: {
    fontSize: 15,
    color: '#000'
  },
  contentContainer: {
    padding: 10,
    paddingTop: 0,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 0.7
  },
  image: {
    width: width*0.45,
    height: width*0.45,
  },
	textBox: {
		width: width*0.7,
		height: height*0.07,
	},
	searchBox: {
		flex: 0.05,
		flexDirection: 'row',
		paddingHorizontal: 10,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	bottomTab: {
		flex: 0.075,
		flexDirection: 'row',
		backgroundColor: '#8bc34a',
		paddingVertical: 5
	},
	bottomTabButton: {
		flex: 1,
		backgroundColor: 'transparent',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
