
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  Button,
  PropTypes,
  AsyncStorage,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {GoogleSignin} from 'react-native-google-signin';
import Api from '../../../api/api';

type Props = {
  navigation: PropTypes.obj
};
export default class UserInfo extends Component<Props> {
	constructor(props) {
    super(props);
    this.state = {
      userName: '',
      signedIn: false,
      user: {}
    }
	}

  componentDidMount() {
    AsyncStorage.multiGet(['loggedIn', 'userName', 'idToken', 'userPhoto']).then((data)=>{
      const loggedIn = data[0][1];
      const userName = data[1][1];
      const idToken = data[2][1];
      const userPhoto = data[3][1];
      console.log('loggedIn', loggedIn);
      if(loggedIn) {
        this.setState({
          userName,
          userPhoto,
        });
      }
    })
  }

  signIn = () => {
    console.log('GoogleSignin', GoogleSignin.hasPlayServices);
    GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
      console.log('signIn aaaa');
      GoogleSignin.configure({
        webClientId: '789758131460-9e37vo1lg6n4bi7vmplra02sf41se59u.apps.googleusercontent.com',
      })
      .then(() => {
        GoogleSignin.signIn()
        .then((user) => {
          console.log(user);
          Api.post('/login', null, user.idToken).then((resp)=>console.log('resp login', resp))
          AsyncStorage.setItem('loggedIn', 'true')
          AsyncStorage.setItem('userName', user.name)
          AsyncStorage.setItem('idToken', user.idToken)
          AsyncStorage.setItem('userPhoto', user.photo)
          this.setState({
            user: user,
            userName: user.name,
            signedIn: true,
            userPhoto: user.photo
          });
        })
        .catch((err) => {
          console.log('WRONG SIGNIN', err);
        })
        .done();
      });
    })
    .catch((err) => {
      console.log("Play services error", err.code, err.message);
    })
  }

	render() {
		return (
			<View style={styles.container}>
        <View style={styles.topContainer}>
          {
            this.state.signedIn
            ?
            <View style={styles.userInfo}>
              <Image
                style={{width: 50, height: 50, marginRight: 10}}
                source={{uri: this.state.userPhoto}}
                resizeMode="cover"
                borderRadius={25}
              />
              <Text style={styles.userName}>{this.state.userName}</Text>
            </View>
            :
            <Button title="SignIn"
              onPress={this.signIn}
            />
          }
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>this.props.navigation.navigate('Faq')}
          >
            <Icon name="help-circle"/>
            <Text style={styles.buttonText}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>this.props.navigation.navigate('Terms')}
          >
            <Icon name="library-books"/>
            <Text style={styles.buttonText}>Terms & Conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>this.props.navigation.navigate('PrivacyPolicy')}
          >
            <Icon name="circle" />
            <Text style={styles.buttonText}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>this.props.navigation.navigate('About')}
          >
            <Icon name="circle" />
            <Text style={styles.buttonText}>About</Text>
          </TouchableOpacity>
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
  topContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    elevation: 1,
    borderBottomColor: '#f5f5f5'
  },
  userInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 0.8,
  },
  button: {
    flexDirection: 'row',
    padding: 10,
    alignItems:'center'
  },
  buttonText: {
    paddingLeft: 10
  },
  userName: {
    fontSize: 18
  }
});
